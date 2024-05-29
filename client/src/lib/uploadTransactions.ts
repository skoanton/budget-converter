import { Transaction } from "@/types/transactions";
import { apiRequest } from "./api";
import { getEntites } from "./getEntites";
import { CategoryDescription } from "@/types/categories";
import { addDescriptionToCategory } from "./categories/addDescriptionToCategory";
import { useTransactionStore } from "./store/useTransactionStore";

export const uploadTransactions = async (transactions: Transaction[]) => {
       
  try {
    const categories_descriptions = await getEntites<CategoryDescription>(
      "/categories/descriptions"
    );
    const promises = transactions.map(async (transaction) => {
      const categoryDescriptionExists = categories_descriptions?.some(
        (catDesc) =>
          catDesc.category_ID === transaction.category_ID &&
          catDesc.description_ID === transaction.description_ID
      );

      if (!categoryDescriptionExists) {
        await addDescriptionToCategory(
          transaction.description_ID,
          transaction.category_ID
        );

      }
      console.log("Transaction trying to upload:",transaction);
      try {
        const dataToSend= {
                ...transaction,
                date: new Date(transaction.date.toISOString())
        }
        await apiRequest("/transactions", "POST", dataToSend);
        console.log("Uploaded:", transaction);
      } catch (error) {
        console.error("Failed to upload transaction", transaction, error);
      }
    });
    await Promise.all(promises);
    console.log("All transactions uploaded");
    

    // TODO: Fix amount update
  } catch (error) {
    console.error("Error uploading transactions:", error);
  }
};
