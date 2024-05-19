import db from "@/lib/firebase";
import { Transaction } from "@/types/transactions";

import { addDoc, collection  } from "firebase/firestore"; 


export const uploadTransactions = async (transactions: Transaction[]) => {

    try {
        const transactionCollection = (collection(db,"transactions"));

        for (const transaction of transactions) {
            const transactionToAdd =  {
                account: transaction.account,
                amount: transaction.amount,
                category: transaction.category,
                date: transaction.date,
                description: transaction.description
            };
            await addDoc(transactionCollection,transactionToAdd);
        }
        console.log("All transcations have been uploaded sucessfully");
      
    } catch (error) {
        console.error("Error uploading transactions:",error);
    }

}