import { Timestamp, collection, doc, getDoc, getDocs } from "firebase/firestore";
import db from "./firebase";
import { Transaction } from "@/types/transactions";

export const getTransactions = async (): Promise<Transaction[]> => {

    try {
        const transactionCollection = collection(db,"transactions");
        const transactionSnapshot = await getDocs(transactionCollection);

        if(transactionSnapshot.empty){
            console.log("No transactions found");
            return [];
        }
        const transactionData = transactionSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                account: data.account,
                category: data.category,
                date: (data.date as Timestamp).toDate(),
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