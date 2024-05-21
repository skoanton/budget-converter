"use client";

import { Transaction } from "@/types/transactionsType";
import Link from "next/link";
import TransactionRow from "./TransactionRow";
import { useEffect, useState } from "react";
import { getTransactions } from "@/lib/getTransactions";

export default function TransactionTable() {
  const [transactions, setTransations] = useState<Transaction[]>([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const fetchedTransaction = await getTransactions();
      if (fetchedTransaction) {
        setTransations(fetchedTransaction);
      }
    };
    fetchTransactions();
  }, []);

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
