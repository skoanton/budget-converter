import { DocumentReference, collection, doc, getDocs, query, where } from "firebase/firestore";


import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { Account } from "@/typesss/accountType";
import { db } from "../firebase";


export const getAccountRefById = async (accountId:string): Promise<DocumentReference<Account> | null> => {

    try {
        
        const accountDocRef = doc(db,COLLECTION_NAMES.ACCOUNTS,accountId) as DocumentReference<Account>;
        return accountDocRef;

    } catch (error) {
        console.error("Could not fetch account by name:", error);
        return null;
    }


}