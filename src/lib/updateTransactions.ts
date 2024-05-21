
import { writeBatch, doc } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { Transaction } from "@/types/transactionsType";


export const updateTransactions = async (
  newTransactionData: Transaction | Transaction[]
) => {
  try {
    const batch = writeBatch(db);

    if (Array.isArray(newTransactionData)) {
      for (const transaction of newTransactionData) {
        const transactionRef = doc(db, COLLECTION_NAMES.TRANSACTIONS, transaction.id);

        batch.update(transactionRef, {
          account: transaction.account,
          category: transaction.category,
          date: transaction.date,
          description: transaction.description,
          amount: transaction.amount,
        });
      }
    } else {
      const transactionRef = doc(db, COLLECTION_NAMES.TRANSACTIONS, newTransactionData.id);
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
