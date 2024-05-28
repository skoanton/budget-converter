
import { getAccounts } from "./getAccounts"
import { DocumentReference, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Account } from "@/typesss/accountType";


export const updateAmountOnAccount = async (accountToChange:DocumentReference<Account>,amount:number) => {

    try {

        const accountSnap = await getDoc(accountToChange);

        if(!accountSnap.exists){
            console.log("could not find doc of account");
            throw new Error("Wrong");
        }
        
            const accountData = accountSnap.data();
            if(accountData){
                const updatedBalance = accountData.balance + (amount);
                
                await updateDoc(accountToChange, {
                    balance:updatedBalance

                })
                console.log("Changed balance");
            }

    } catch (error) {
        console.error("could not update account balance");
    }

}