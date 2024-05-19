"use client";

import { Transaction } from "@/types/transactions";
import Link from "next/link";

type TransactionTableProps = {
  transactions: Transaction[];
};

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id} className="text-center">
                <td className="border">
                  <Link href={`/transactions/${transaction.id}`}>
                    {transaction.description}{" "}
                  </Link>
                </td>

                <td className="border">{transaction.account}</td>
                <td className="border">{transaction.category}</td>
                <td className="border">
                  {transaction.date.toLocaleDateString()}
                </td>
                <td className="border">{transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
