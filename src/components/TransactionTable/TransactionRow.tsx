"use-client";
import { useGetAccountRef } from "@/hooks/useGetAccountRef";
import { useGetCategoryRef } from "@/hooks/useGetCategoryRef";
import { Transaction } from "@/types/transactionsType";
import Link from "next/link";

type TransactionRowProps = {
  transaction: Transaction;
};

export default function TransactionRow({ transaction }: TransactionRowProps) {
  const {
    account,
    error: accountError,
    loading: accountLoading,
  } = useGetAccountRef(transaction.account);

  const {
    category,
    error: categoryError,
    loading: categoryLoading,
  } = useGetCategoryRef(transaction.category);

  return (
    <>
      <tr key={transaction.id} className="text-center">
        <td className="border">
          <Link href={`/transactions/${transaction.id}`}>
            {transaction.description}{" "}
          </Link>
        </td>
        <td className="border">{account?.name}</td>
        <td className="border">{category?.name}</td>
        <td className="border">{transaction.date.toLocaleDateString()}</td>
        <td className="border">{transaction.amount} kr</td>
      </tr>
    </>
  );
}
