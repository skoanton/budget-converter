import { Transaction } from "@/types/transactions";

export const extractUncategorizedTransactions = async (
  transactions: Transaction[]
): Promise<Transaction[]> => {
  const uncategorizedTransaction: Transaction[] = [];
  for (const transaction of transactions) {
    if (transaction.category_ID === 1) {
      uncategorizedTransaction.push(transaction);
    }
  }
  return uncategorizedTransaction;
};
