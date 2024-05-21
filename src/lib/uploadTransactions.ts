import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Transaction } from "@/types/transactionsType";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { useState } from "react";
import { updateAmountOnAccount } from "./updateBalanceOnAccount";
import { updateSpentAmountOnCategory } from "./categories/updateSpentAmountOnCategory";

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
            console.log("Starting to change amount");
            await updateAmountOnAccount(transaction.account,transaction.amount);
           await updateSpentAmountOnCategory(transaction.category,transaction.amount);
        }
        console.log("Upload complete");
    } catch (error) {
        console.error("Error uploading transactions:",error);
    }

}