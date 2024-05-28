import { Transaction } from "@/types/transactions";
import { apiRequest } from "./api";

export const uploadTransactions = async (transactions: Transaction[]) => {

        for (const transaction of transactions) {
                await apiRequest("/transactions","POST",transaction);
                console.log("Uploaded:",transaction);
            };
            console.log("Starting to change amount");
           /*  await updateAmountOnAccount(transaction.account,transaction.amount);
           await updateSpentAmountOnCategory(transaction.category,transaction.amount); */

           // TODO: Fix amount update  
        console.log("Upload complete");
    
}