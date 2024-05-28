import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { getCategoryById } from "@/lib/categories/getCategoryById";
import { Transaction } from "@/types/transactions";

export const extractCategorizedTransactions = async (
  transactions: Transaction[]
): Promise<Transaction[]> => {
  const categorizedTransaction: Transaction[] = [];

  for (const transaction of transactions) {
    if (transaction.category_ID !== 1) {
      categorizedTransaction.push(transaction);
    }
  }

  return categorizedTransaction;
};
