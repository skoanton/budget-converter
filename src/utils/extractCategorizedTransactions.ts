
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { getCategoryById } from "@/lib/categories/getCategoryById";
import { Transaction } from "@/types/transactionsType";



export const extractCategorizedTransactions = async (transactions: Transaction[]): Promise< Transaction[]> => {
    const categorizedTransaction:Transaction[] = [];
    console.log("Setting categories for Categorized:", transactions);

   for(const transaction of transactions){

    try {
        const collectionName = transaction.type === "expense" ? COLLECTION_NAMES.EXPENSES_CATEGORIES: COLLECTION_NAMES.INCOME_CATEGORIES
        const category = await getCategoryById(transaction.category.id,collectionName);

        if(category){
            if(category.name !== "Uncategorized"){
                categorizedTransaction.push(transaction);
            }
        }
        else{
            console.log("Could not get category",category);
        }
    } catch (error) {
        console.error("Could not set categorized",error);
    }

       
   }
       console.log("categorizedTransactions return:",categorizedTransaction);
   return categorizedTransaction;
}