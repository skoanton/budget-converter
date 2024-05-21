import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Transaction } from "@/types/transactionsType";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { useState } from "react";

export const uploadTransactions = async (transactions: Transaction[]) => {

    try {
 
        const transactionCollection = (collection(db,COLLECTION_NAMES.TRANSACTIONS));

        for (const transaction of transactions) {
            const transactionToAdd =  {
                account: transaction.account,
                amount: transaction.amount,
                category: transaction.category,
                date: transaction.date,
                description: transaction.description
            };
            await addDoc(transactionCollection,transactionToAdd)


        }
   
    } catch (error) {
        console.error("Error uploading transactions:",error);
    }

}