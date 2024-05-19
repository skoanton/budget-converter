import { Transaction } from "@/types/transactions";


export const extractCategorizedTransactions = (transactions: Transaction[]): Transaction[] => {
    return transactions.filter((transaction) => transaction.category !== "No Category");
}