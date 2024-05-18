import { Transaction } from "@/types/transactions";
import { v4 as uuidv4 } from "uuid";

export const useBreakOutTransactions = (text: string): Transaction[] => {
  const transactionsTemp = text?.split(`\n`);

  transactionsTemp.shift();
  transactionsTemp.shift();

  const transactions: Transaction[] | null = transactionsTemp
    .map((transaction) => {
      const splitedTransaction = transaction.split(",");
      if (splitedTransaction.length > 1) {
        const accountName = splitedTransaction[3];
        const trimmedAccountName = accountName.slice(1, -1);
        const description = splitedTransaction[8];
        const trimmedDescription = description.slice(1,-1);

        return {
          id: uuidv4(),
          accountName: trimmedAccountName,
          date: new Date(splitedTransaction[6]),
          description: trimmedDescription,
          amount: splitedTransaction[10],
        };
      } else {
        console.log("splitted transaction is empty");
        return null;
      }
    })
    .filter((trans) => trans !== null) as Transaction[];
  return transactions;
};
