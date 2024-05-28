import { writeBatch, doc } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { Transaction } from "@/types/transactions";
import { apiRequest } from "./api";

export const updateTransactions = async (newTransactionData: Transaction) => {
  try {
    const updateData = { category_ID: newTransactionData.category_ID };

    await apiRequest(
      `transactions/id/${newTransactionData.id}`,
      "PATCH",
      updateData
    );
  } catch (error) {
    console.log("something went wrong", error);
  }
};
