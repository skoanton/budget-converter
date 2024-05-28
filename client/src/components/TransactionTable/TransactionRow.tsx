"use-client";
import { useGetEntityById } from "@/hooks/useGetEntityById";
import { Account } from "@/types/accounts";
import { Category } from "@/types/categories";
import { Description } from "@/types/descriptions";
import { Transaction } from "@/types/transactions";
import Link from "next/link";
type TransactionRowProps = {
  transaction: Transaction;
};

export default function TransactionRow({ transaction }: TransactionRowProps) {
  const { entity: account, loading: accountLoading } =
    useGetEntityById<Account>(transaction.account_ID, "/accounts");

  const { entity: category, loading: categoryLoading } =
    useGetEntityById<Category>(transaction.category_ID, "/categories");

  const { entity: description, loading: descriptionLoading } =
    useGetEntityById<Description>(transaction.description_ID, "/descrpitions");

  return (
    <>
      <tr key={transaction.id} className="text-center">
        <td className="border">
          <Link href={`/transactions/${transaction.id}`}>
            {description?.name}{" "}
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
