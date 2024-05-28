
import { useCallback, useEffect, useState } from "react";
import { useGetCategories } from "./useGetCategories";
import { processTransactions } from "@/utils/processTransactions";
import { Account } from "@/types/accounts";
import { Transaction } from "@/types/transactions";


export const useProcessTransactions = ()  => {
  const categories = useGetCategories();
  const [error,setError] = useState<string | null>(null);
  const [newTransaction,setNewTransaction] = useState<boolean>(false);
  const [newAccountInfo,setNewAccountInfo] = useState<Account | null>(null);
  const [resolveNewAccount, setResolveNewAccount] = useState<((amount: number) => void) | null>(null);

  const showNewAccountForm = useCallback((accountName:string) => {
    return new Promise<number>((resolve) => {
      setResolveNewAccount(() => resolve);
      setNewAccountInfo({id: undefined ,name: accountName, balance: 0}); 
      setNewTransaction(true);
    });
  }, [])

  const handleNewAccountSubmit = useCallback((amount:number) => {
    setNewTransaction(false);
    if(resolveNewAccount){
        resolveNewAccount(amount);
        setResolveNewAccount(null);
    }
    setNewAccountInfo(null);
  },[resolveNewAccount])

    const processTextTransactions = useCallback(
      async(text:string): Promise<Transaction[]> => {
         
          setError(null);
          try {
              const transactions = await processTransactions(text,categories,showNewAccountForm)
              return transactions;
            
          } catch (error) {
            setError("Error processing transactions");
           ;
            return [];  
          }
      },
      [categories,showNewAccountForm]      
    );

    return { processTextTransactions, error, newTransaction, handleNewAccountSubmit, newAccountInfo };
};
