import { DocumentReference, collection, getDocs, query, where } from "firebase/firestore";


import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { Account } from "@/types/accountType";
import { db } from "./firebase";

export const getAccountReferenceByName = async (name:string): Promise<DocumentReference<Account> | null> => {

    try {
        
        const accountsCollection = collection(db,COLLECTION_NAMES.ACCOUNTS);

        const q = query(accountsCollection, where("name", "==", name));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.empty){
            console.log(`No account found with name ${name}`);
            return null;
        }

        const accountDoc = querySnapshot.docs[0];
        return accountDoc.ref as DocumentReference<Account>;


    } catch (error) {
        console.error("Could not fetch account by name:", error);
        return null;
    }


}