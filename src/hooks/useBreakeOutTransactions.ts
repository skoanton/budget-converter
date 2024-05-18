import { Transaction } from "@/types/transactions";
import { v4 as uuidv4 } from "uuid";
import { useFetchCategories } from "./useFetchCategories";
import { useEffect, useState } from "react";

import { removeFirstAndLastChar } from "@/utils/removeFirstAndLastChar";
import { checkDescription } from "@/utils/checkDescription";


export const useBreakOutTransactions = (text: string): Transaction[] => {
  const categories = useFetchCategories();
  const [transaction,setTransaction] = useState<Transaction[]>([]);

  useEffect(()=> {

    if(!text || categories.length === 0){
      return;
    }
  
    const transactionLines = text?.split(`\n`);
    if (transactionLines.length < 3) {
      console.error('Not enough lines in the text');
      return;
    }
    transactionLines.shift();
    transactionLines.shift();
  
    const newTransactions: Transaction[] | null = transactionLines
      .map((transaction) => {
        const splitedTransaction = transaction.split(",");
        if (splitedTransaction.length > 1) {
          const accountName = removeFirstAndLastChar( splitedTransaction[3]);
          const description = removeFirstAndLastChar(splitedTransaction[8]);    
          const transactionCategory = checkDescription(categories,description);

          return {
            id: uuidv4(),
            accountName: accountName,
            date: new Date(splitedTransaction[6]),
            description: description,
            amount: splitedTransaction[10],
            category: transactionCategory? transactionCategory.name : "No Category"
          };
        } else {
          console.log("splitted transaction is empty");
          return null;
        }
      },[text])
      .filter((trans) => trans !== null) as Transaction[];
      setTransaction(newTransactions);
  },[text,categories])

  
  return transaction;
};
