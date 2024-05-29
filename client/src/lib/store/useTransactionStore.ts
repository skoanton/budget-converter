import { Transaction } from "@/types/transactions";
import {create} from "zustand";

interface TransactionState {
    transactions: Transaction [],
    categorizedTransactions: Transaction[],
    uncategorizedTransactions: Transaction[],
    addTransaction: (tansaction:Transaction) => void,
    updateTransaction: (id: number, category_ID: number) => void,
    clearTransactions: () => void
}

export const useTransactionStore = create<TransactionState>()((set) => ({
    transactions: [],
    categorizedTransactions: [],
    uncategorizedTransactions: [],
    addTransaction: (transaction) =>
        set((state) => {
          if (transaction.category_ID !== 1) {
            return {
              categorizedTransactions: [...state.categorizedTransactions, transaction],
                transactions: [...state.categorizedTransactions,transaction],
            };
          } else {
            return {
              uncategorizedTransactions: [...state.uncategorizedTransactions, transaction],
              transactions: [...state.categorizedTransactions,transaction],
            };
          }
        }),
        updateTransaction: (id, category_ID) => 
            set((state) => {
                let updatedCategorizedTransactions = [...state.categorizedTransactions];
                let updatedUncategorizedTransactions = [...state.uncategorizedTransactions];
    
                const uncategorizedIndex = updatedUncategorizedTransactions.findIndex((t) => t.id === id);
                if (uncategorizedIndex !== -1) {
                    const transaction = updatedUncategorizedTransactions[uncategorizedIndex];
                    transaction.category_ID = category_ID;
                    updatedUncategorizedTransactions.splice(uncategorizedIndex, 1);
                    updatedCategorizedTransactions.push(transaction);
                } else {
                    
                    const categorizedIndex = updatedCategorizedTransactions.findIndex((t) => t.id === id);
                    if (categorizedIndex !== -1) {
                        const transaction = updatedCategorizedTransactions[categorizedIndex];
                        transaction.category_ID = category_ID;
                        updatedCategorizedTransactions[categorizedIndex] = transaction;
                    }
                }
    
                return {
                    categorizedTransactions: updatedCategorizedTransactions,
                    uncategorizedTransactions: updatedUncategorizedTransactions,
                };
            }),
        clearTransactions: () => set({categorizedTransactions:[], uncategorizedTransactions:[]}),

}));

