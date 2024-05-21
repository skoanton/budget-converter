import { getDocs, collection, doc, DocumentReference } from "firebase/firestore";
import { db } from "./firebase";
import { Account } from "@/types/accountType";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

export const getAccounts = async (): Promise<DocumentReference<Account>[]> => {

    try {
        const accountSnapshot = await getDocs(collection(db,COLLECTION_NAMES.ACCOUNTS));

        if(accountSnapshot.empty){
            console.log("No accounts");
            return [];
        }
        const accountRefs = accountSnapshot.docs.map((accountDoc)=> {
            return doc(db,`${COLLECTION_NAMES.ACCOUNTS}/${accountDoc.id}`) as DocumentReference<Account>
        })
        
        return accountRefs;

    } catch (error) {
        console.error("Could not fetch accounts:", error);
        return [];
    }

}