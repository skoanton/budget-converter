
const { db } = require('@/lib/firebase');
import { Account } from "@/types/account";
const {collection, getDocs } = require('firebase/firestore');
export const getAccounts = async (): Promise<Account[]> => {

    try {
        const accountSnapshot = await getDocs(collection(db,"accounts"));

        if(accountSnapshot.empty){
            console.log("No accounts");
            return [];
        }

         const accountData = accountSnapshot.docs.map((doc:any) => {
            const data = doc.data();
            return{
                id: doc.id,
                name: data.name,
                amount: data.amount,
            } as Account
         })
         return accountData;       

    } catch (error) {
        console.log("Could not fetch accounts:", error);
        return [];
    }


}