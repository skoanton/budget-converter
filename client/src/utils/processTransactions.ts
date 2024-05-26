import { removeFirstAndLastChar } from "./removeFirstAndLastChar";
import { checkDescription } from "./checkDescription";
import { v4 as uuidv4 } from "uuid";
import { createAccount } from "@/lib/createAccount";
import { getAccountReferenceByName } from "@/lib/getAccountReferenceByName";
import { DocumentReference } from "firebase/firestore";
import { getCategoryReferenceByName } from "@/lib/categories/getCategoryReferenceByName";
import { Category, Transaction } from "@/types/transactionsType";
import { getDefaultCategoryReference } from "@/lib/categories/getDefaultCategoryRef";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

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

      const transactionCategory =
        amount > 0
          ? checkDescription(categories.incomeCategories, description)
          : checkDescription(categories.expenseCategories, description);

      let accountRef = await getAccountReferenceByName(accountName);
      if (!accountRef) {
        const startAmount = await onShowNewAccountForm(accountName);
        await createAccount(accountName, startAmount);
        accountRef = await getAccountReferenceByName(accountName);
        if (!accountRef) {
          console.error("Failed to create or retrieve account", accountName);
        }
      } 
      let categoryRefToAdd: DocumentReference<Category>;
      const collectionName =
        amount < 0
          ? COLLECTION_NAMES.EXPENSES_CATEGORIES
          : COLLECTION_NAMES.INCOME_CATEGORIES;
      try {
        if (transactionCategory) {
          const ref = await getCategoryReferenceByName(
            transactionCategory.name,
            collectionName
          );

          categoryRefToAdd =
            ref || (await getDefaultCategoryReference(collectionName));
        } else {
            categoryRefToAdd = await getDefaultCategoryReference(
              collectionName
            );
        }


        if (accountRef && categoryRefToAdd) {
          newTransactions.push({
            id: uuidv4(),
            account: accountRef,
            date: new Date(splitedTransaction[6]),
            description: description,
            type: amount > 0 ? "income" : "expense",
            amount: amount,
            category: categoryRefToAdd,
          });
        } else {
          console.error("Could not find the account or category reference");
        }
      } catch (error) {
        console.error(
          "An error occurred while processing the transaction:",
          error
        );
      }
    }
  }
  return newTransactions;
};
