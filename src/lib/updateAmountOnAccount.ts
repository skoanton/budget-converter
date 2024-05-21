import { Account } from "@/types/account";
import { getAccounts } from "./getAccounts"
import { doc } from "firebase/firestore";
import { db } from "./firebase";


export const updateAmountOnAccount = async (accountToChange:Account,amount:number) => {

    try {

        const accountRef = doc(db,"accounts", accountToChange.id);
        


    } catch (error) {
        
    }


}