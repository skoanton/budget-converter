import { Transaction } from "@/types/transactions";
import {create} from "zustand";

interface TransactionState {
    transactions: Transaction [],
    categorizedTransactions: Transaction[],
    uncategorizedTransactions: Transaction[],
    addTransaction: (tansaction:Transaction) => void,
    updateTransaction: (id: string, category_ID: number) => void,
    clearTransactions: () => void
}

export const useTransactionStore = create<TransactionState>()((set) => ({
    transactions: [],
    categorizedTransactions: [],
    uncategorizedTransactions: [],
    addTransaction: (transaction) =>
        set((state) => {
          const updatedCategorizedTransactions = transaction.category_ID !== 1 
          ? [...state.categorizedTransactions, transaction]
          : state.categorizedTransactions;
          
        const updatedUncategorizedTransactions = transaction.category_ID === 1 
          ? [...state.uncategorizedTransactions, transaction]
          : state.uncategorizedTransactions;
  
        return {
          transactions: [...state.transactions, transaction],
          categorizedTransactions: updatedCategorizedTransactions,
          uncategorizedTransactions: updatedUncategorizedTransactions,
        };
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
                    allTransactions: [...updatedCategorizedTransactions, ...updatedUncategorizedTransactions],
                    categorizedTransactions: updatedCategorizedTransactions,
                    uncategorizedTransactions: updatedUncategorizedTransactions,
                };
            }),
        clearTransactions: () => set({categorizedTransactions:[], uncategorizedTransactions:[]}),
        

}));

