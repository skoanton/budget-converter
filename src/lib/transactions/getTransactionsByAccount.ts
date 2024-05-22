import { Timestamp, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { COLLECTION_NAMES } from "@/constants/collectionsNames"
import { getAccountById } from "../getAccountById"
import { Transaction } from "@/types/transactionsType"
import { getAccountRefById } from "../accounts/getAccountRefById"

export const getTransactionsByAccount = async (accountId:string): Promise<Transaction[] | null> => {
    try {
        const accountRef = await getAccountRefById(accountId);
        if(!accountRef){
            console.error("No account found");
            return null;
        }
        const transactionsRef = collection(db,COLLECTION_NAMES.TRANSACTIONS);
        
        const transactionsQuery = query(transactionsRef, where( "account", "==", accountRef ));
        const querySnapshot = await getDocs(transactionsQuery);

        const transactions: Transaction[] = []
        querySnapshot.forEach((doc)=> {
            
            const transcationData = doc.data();
            console.log("TransactionData:",transcationData)
            transactions.push( {
                id: doc.id,
                account: transcationData.account,
                date: transcationData.date instanceof Timestamp ? transcationData.date.toDate() : transcationData.date,
                type: transcationData.type,
                description: transcationData.description,
                amount: transcationData.amount,
                category: transcationData.category,

            })
        })
        console.log("transactions",transactions);
        return transactions 

    } catch (error) {
        console.error("Could not get transaction of account",error);
        return null;
    }

}