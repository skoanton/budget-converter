import { Transaction } from "@/types/transactions"

export const extractUncategorizedTransactions = (transactions:Transaction[]): Transaction[] => {
    return transactions.filter((transaction) => transaction.category === "No Category");
}