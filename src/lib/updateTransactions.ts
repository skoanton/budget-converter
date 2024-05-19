import { Transaction } from "@/types/transactions";
import { doc, updateDoc, writeBatch } from "firebase/firestore";
import db from "./firebase";

export const updateTransactions = async (
  newTransactionData: Transaction | Transaction[]
) => {
  try {
    const batch = writeBatch(db);

    if (Array.isArray(newTransactionData)) {
      for (const transaction of newTransactionData) {
        const transactionRef = doc(db, "transactions", transaction.id);

        batch.update(transactionRef, {
          account: transaction.account,
          category: transaction.category,
          date: transaction.date,
          description: transaction.description,
          amount: transaction.amount,
        });
      }
    } else {
      const transactionRef = doc(db, "transactions", newTransactionData.id);
      batch.update(transactionRef, {
        account: newTransactionData.account,
        category: newTransactionData.category,
        date: newTransactionData.date,
        description: newTransactionData.description,
        amount: newTransactionData.amount,
      });
    }

    await batch.commit();
    console.log("transaction updated");
  } catch (error) {
    console.log("something went wrong", error);
  }
};
