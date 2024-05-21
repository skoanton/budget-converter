import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { getCategoryById } from "@/lib/categories/getCategoryById";

import { Transaction } from "@/types/transactionsType";


export const extractUncategorizedTransactions = async (transactions:Transaction[]): Promise<Transaction[]> => {
    const uncategorizedTransaction:Transaction[] = [];
    console.log("Setting categories for uncateogirzed:", transactions);
   for(const transaction of transactions){
    try {
        const collectionName = transaction.type === "expense" ? COLLECTION_NAMES.EXPENSES_CATEGORIES: COLLECTION_NAMES.INCOME_CATEGORIES
        const category = await getCategoryById(transaction.category.id,collectionName);

        if(category){
            if(category.name === "Uncategorized"){
                uncategorizedTransaction.push(transaction);
            }
        }
    } catch (error) {
        console.log("Could not set Uncategoriezed",error)
    }
        
   }
   console.log("UNcategorizedTransactions return:",uncategorizedTransaction);
       
   return uncategorizedTransaction;
}