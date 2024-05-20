
const {addDoc, collection} = require("firebase/firestore");
const { db } = require('@/lib/firebase');

export const createAccount = async (accountName: string,startAmount:number) => {

    try {
          await addDoc(collection(db,"accounts"), {
            name: accountName,
            amount: startAmount
         })
         console.log("Account created with name:", accountName);
    } catch (error) {
        console.log("could not add to account to database");
    }


}