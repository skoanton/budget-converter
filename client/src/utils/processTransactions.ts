import { removeFirstAndLastChar } from "./removeFirstAndLastChar";
import { checkDescription } from "./checkDescription";

import { Category } from "@/types/categories";
import { Transaction } from "@/types/transactions";
import { Account } from "@/types/accounts";
import { getDescriptionIdByName } from "@/lib/descriptions/getDescriptionIdByName";
import { getAccountById } from "@/lib/getAccountById";
import { getAccountByName } from "@/lib/accounts/getAccontByName";
import { createAccount } from "@/lib/accounts/createAccount";

interface Categories {
  incomeCategories: Category[];
  expenseCategories: Category[];
}

export const processTransactions = async (
  text: string,
  categories: Categories,
  onShowNewAccountForm: (accountName: string) => Promise<number>
): Promise<Transaction[]> => {
  
  if (!text) {
    console.error("Invalid input data");
    return [];
  }
  const transactionLines = text.split(`\n`);
  if (transactionLines.length < 3) {
    console.error("Not enough lines in the text");
    return [];
  }
  //Remove title lines
  transactionLines.shift();
  transactionLines.shift();
  console.log("TransactionsLines",transactionLines);
  const newTransactions: Transaction[] = [];
  for (const transaction of transactionLines) {
    const splitedTransaction = transaction.split(",");
    if (splitedTransaction.length > 1) {

      const accountName = removeFirstAndLastChar(splitedTransaction[3]);
      const description = removeFirstAndLastChar(splitedTransaction[9]);
      const amount = Number(splitedTransaction[10]);
      try {
        const transactionCategoryId = await checkDescription(description)

        let account:Account | null = await getAccountByName(accountName);
        if (!account) {
          console.log("börjar att skapa ett konto");
          const startAmount = await onShowNewAccountForm(accountName);
          await createAccount(accountName, startAmount);
          account = await getAccountByName(accountName);
          if (!account) {
            console.error("Failed to create or retrieve account", accountName);
          }
        } 
          const descriptionId = await getDescriptionIdByName(description);

          if (account && account.id && transactionCategoryId && descriptionId) {
            console.log("Creating a transaction");
            newTransactions.push({
              amount: amount,
              date: new Date(splitedTransaction[6]),
              description_ID: descriptionId,
              category_ID: transactionCategoryId,
              account_ID: account.id
            });
          } 
          else {
            console.error("Could not find the account or category ID or description ID");
          }
      } catch (error) {
        console.error("An error occurred while processing the transaction", error);
      }
     
      }     
  
  }
  return newTransactions;
};
