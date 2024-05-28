"use client";

import Link from "next/link";
import TransactionRow from "./TransactionRow";
import { useEffect, useState } from "react";
import { getTransactionsByAccount } from "@/lib/transactions/getTransactionsByAccount";
import { Transaction } from "@/types/transactions";
import { useGetEntities } from "@/hooks/useGetEntities";

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
  const { entities: transactions, loading } =
    useGetEntities<Transaction>("/transactions");

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
