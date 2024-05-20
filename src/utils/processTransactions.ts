import { Category, Transaction } from "@/types/transactions";
import { removeFirstAndLastChar } from "./removeFirstAndLastChar";
import { checkDescription } from "./checkDescription";
import { v4 as uuidv4 } from "uuid";
import { getAccounts } from "@/lib/getAccounts";
import { createAccount } from "@/lib/createAccount";
import { getCategories } from "@/lib/getCategories";
import { useGetCategories } from "@/hooks/useGetCategories";
import { Account } from "@/types/account";

interface Categories  {
  incomeCategories: Category[];
  expenseCategories: Category[];
}

export const processTransactions = async (text:string,categories: Categories,onShowNewAccountForm: (accountName: string) => Promise<number>): Promise<Transaction[]> => {
  console.log("Försöker process transactions i processTransactions")
  
    if(!text || categories.expenseCategories.length === 0 || categories.incomeCategories.length === 0){
        return [];
    }
    
    const transactionLines = text?.split(`\n`);
    if (transactionLines.length < 3) {
      console.error('Not enough lines in the text');
      return [];
    }
    //Remove title lines
    transactionLines.shift();
    transactionLines.shift();
    let accounts = await getAccounts();
    const newTransactions: Transaction[] = [];
    for (const transaction of transactionLines){

      const splitedTransaction = transaction.split(",");
      if (splitedTransaction.length > 1) {
        const accountName = removeFirstAndLastChar( splitedTransaction[3]);
        const description = removeFirstAndLastChar(splitedTransaction[9]);  
        const amount = Number(splitedTransaction[10]);
        
        const transactionCategory = amount>0 ? checkDescription(categories.incomeCategories,description) : checkDescription(categories.expenseCategories,description);
        if(!accounts.find((account) => account.name === accountName)){
          const startAmount = await onShowNewAccountForm(accountName);
          await createAccount(accountName,startAmount);
          accounts = [...accounts, { id:"",  name: accountName, amount: startAmount }];
        }
        newTransactions.push( {
          id: uuidv4(),
          account: accountName,
          date: new Date(splitedTransaction[6]),
          description: description,
          amount: amount,
          category: transactionCategory? transactionCategory.name : "No Category"
        })   
        
      } else {
        console.log("splitted transaction is empty");

      }
    }
    
      return newTransactions

}

