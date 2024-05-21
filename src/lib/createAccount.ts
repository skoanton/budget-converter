import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";



export const createAccount = async (accountName: string,startAmount:number) => {

    try {
          await addDoc(collection(db,COLLECTION_NAMES.ACCOUNTS), {
            name: accountName,
            amount: startAmount
         })
         console.log("Account created with name:", accountName);
    } catch (error) {
        console.log("could not add to account to database");
    }


}