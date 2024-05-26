
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";
import { Transaction } from "@/types/transactionsType";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";


export const getTransactionById = async (transactionId:string): Promise<Transaction | undefined> => {

    try {
        if (!transactionId) {
            throw new Error('Transaction ID is not provided');
        }

        const docRef = doc(db,COLLECTION_NAMES.TRANSACTIONS,transactionId );
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