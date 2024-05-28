import { getDocs, collection, doc, DocumentReference } from "firebase/firestore";
import { db } from "./firebase";
import { Account } from "@/typesss/accountType";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

export const getAccounts = async (): Promise<Account[]> => {

    try {
        const accountSnapshot = await getDocs(collection(db,COLLECTION_NAMES.ACCOUNTS));

        if(accountSnapshot.empty){
            console.log("No accounts");
            return [];
        }
        const accountRefs : Account[] = accountSnapshot.docs.map((accountDoc)=> {
            const accountData = accountDoc.data();
            return {
                id: accountDoc.id,
                name: accountData.name,
                balance: accountData.balance
            }
        })

        return accountRefs;

    } catch (error) {
        console.error("Could not fetch accounts:", error);
        return [];
    }

}