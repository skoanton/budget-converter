import { Account } from "@/types/accounts";
import { apiRequest } from "../api";



export const createAccount = async (accountName: string,startAmount:number) => {

    const newAccount:Account = {
        name: accountName,
        balance: startAmount
    }
    try {
        await apiRequest("/accounts", "POST", newAccount);
        console.log("Account created");
      } catch (error) {
        console.error("Error creating account:", error);
        throw error; 
      }

}