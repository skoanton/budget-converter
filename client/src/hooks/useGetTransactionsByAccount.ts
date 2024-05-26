import { getTransactionsByAccount } from "@/lib/transactions/getTransactionsByAccount";
import { Transaction } from "@/types/transactionsType";
import { useEffect, useState } from "react";

export const useGetTransactionsByAccount =  (accountId:string):Transaction[] | null => {

    const [transactions,setTransactions] = useState<Transaction[]>([]);
    console.log("inne i useGetTransactionsByAccount");
    useEffect(() => {
        
        const fetchTransactions= async () => {
        
            try {
                const fetchedTransactions = await getTransactionsByAccount(accountId);
                console.log("Kör useeffect");
            console.log("Transactions",fetchedTransactions);
                if(!fetchedTransactions){
                    console.error("Could not fetch transactions");
                    return null;
                }
            setTransactions(fetchedTransactions);
           
            } catch (error) {
                 console.error("Could not fetch transacitons by",accountId);
                 return null;
            }        
           
        }   

        fetchTransactions();
        
    },[accountId])

    return transactions;

}