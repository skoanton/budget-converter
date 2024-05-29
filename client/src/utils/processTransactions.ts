import { removeFirstAndLastChar } from "./removeFirstAndLastChar";
import { checkDescription } from "./checkDescription";
import { Category } from "@/types/categories";
import { Transaction } from "@/types/transactions";
import { getDescriptionIdByName } from "@/lib/descriptions/getDescriptionIdByName";
import { getOrCreateAccount } from "./getOrCreateAccount";
import { v4 as uuidv4 } from 'uuid';
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

  const newTransactions: Transaction[] = [];
  for (const transaction of transactionLines) {
    const splitedTransaction = transaction.split(",");
    if (splitedTransaction.length > 1) {

      const accountName = removeFirstAndLastChar(splitedTransaction[3]);
      const description = removeFirstAndLastChar(splitedTransaction[9]);
      const amount = Number(splitedTransaction[10]);

      try {
        const transactionCategoryId = await checkDescription(description)
        const account = await getOrCreateAccount(accountName,onShowNewAccountForm);
        const descriptionId = await getDescriptionIdByName(description);

          if (account && account.id && transactionCategoryId) {
            newTransactions.push({
              id: uuidv4(),
              amount: amount,
              date: new Date(splitedTransaction[6]),
              description_ID: descriptionId,
              category_ID: transactionCategoryId,
              account_ID: account.id
            });
          } 
          else {
            console.error("Could not find the account or category ID");
          }
      } catch (error) {
        console.error("An error occurred while processing the transaction", error);
      }
     
      }     
  
  }
  return newTransactions;
};
