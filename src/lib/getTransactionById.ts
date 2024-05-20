import { Transaction } from "@/types/transactions"
const { db } = require('@/lib/firebase');

const {Timestamp, doc, getDoc } = require('firebase/firestore');

export const getTransactionById = async (transactionId:string): Promise<Transaction | undefined> => {

    try {
        if (!transactionId) {
            throw new Error('Transaction ID is not provided');
        }

        const docRef = doc(db,"transactions",transactionId );
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            const data = docSnap.data();
            return {
                id: docSnap.id,
                account: data.account,
                category: data.category,
                date: data.date instanceof Timestamp ? data.date.toDate() : data.date,
                description: data.description,
                amount: data.amount
            } as Transaction;
         }
        else{
            console.log("transaction does not exist")
        }
    } catch (error) {
        console.log("Could not get transaction",error);
    }

}