"use client";

import { Transaction } from "@/types/transactionsType";
import Link from "next/link";
import TransactionRow from "./TransactionRow";
import { useEffect, useState } from "react";
import { getTransactions } from "@/lib/getTransactions";
import { getTransactionsByAccount } from "@/lib/transactions/getTransactionsByAccount";

type BaseTransactionTableProps = {
  allTransactions: boolean;
};

type AccountTransactionTableProps = {
  allTransactions: false;
  accountId: string;
};

type AllTransactionsTableProps = {
  allTransactions: true;
};

type TransactionTableProps = BaseTransactionTableProps &
  (AccountTransactionTableProps | AllTransactionsTableProps);

export default function TransactionTable(props: TransactionTableProps) {
  const [transactions, setTransations] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchAllTransactions = async () => {
      const fetchedTransaction = await getTransactions();
      if (fetchedTransaction) {
        setTransations(fetchedTransaction);
      }
    };

    const fetchAccountTransactions = async (accountId: string) => {
      const fetchedTransaction = await getTransactionsByAccount(accountId);
      if (fetchedTransaction) {
        setTransations(fetchedTransaction);
      }
    };

    if (props.allTransactions) {
      fetchAllTransactions();
    } else {
      fetchAccountTransactions(props.accountId);
    }
  }, [props.allTransactions]);

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border">
            <th className="border">Description</th>
            <th className="border">Account</th>
            <th className="border">Category</th>
            <th className="border">Date</th>
            <th className="border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => {
              return (
                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}
