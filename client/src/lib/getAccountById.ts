import {  doc, getDoc } from "firebase/firestore";

import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { db } from "./firebase";
import { Account } from "@/typesss/accountType";


export const getAccountById = async (accountId:string,):Promise<Account | null> => {
    console.log("Categoryid:",accountId);
    try {

        const accountRef = doc(db,COLLECTION_NAMES.ACCOUNTS, accountId);
        const accountSnapshot = await getDoc(accountRef);

        if(accountSnapshot.exists()){
            console.log(`account found`);
            const accountData = accountSnapshot.data();
            const accountToReturn: Account = {
                id: accountSnapshot.id,
                name: accountData.name,
                balance: accountData.balance
            }

            return accountToReturn
        }

        else {
            console.log("Category not found");
            return null;
        }


    } catch (error) {
        console.error("Could not fetch category by name:", error);
        return null;
    }



}