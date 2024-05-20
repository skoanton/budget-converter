
const {Timestamp, collection, doc, getDoc, getDocs } = require('firebase/firestore');
const { db } = require('@/lib/firebase');
import { Transaction } from "@/types/transactions";

export const getTransactions = async (): Promise<Transaction[]> => {

    try {
        const transactionCollection = collection(db,"transactions");
        const transactionSnapshot = await getDocs(transactionCollection);

        if(transactionSnapshot.empty){
            console.log("No transactions found");
            return [];
        }
        const transactionData = transactionSnapshot.docs.map((doc:any) => {
            const data = doc.data();
            return {
                id: doc.id,
                account: data.account,
                category: data.category,
                date: data.date instanceof Timestamp ? data.date.toDate() : data.date,
                description: data.description,
                amount: data.amount
            } as Transaction;
          });
            return transactionData;
        

      
    } catch (error) {
        console.log("Could not catch transactions:", error);
        return [];
    }

}