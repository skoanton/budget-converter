"use-client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
      <TableRow>
        <TableCell>{transaction.date.toLocaleDateString()}</TableCell>
        <TableCell>{account?.name}</TableCell>
        <TableCell className="font-medium">
          <Link href={`/transactions/${transaction.id}`}>
            {description?.name}{" "}
          </Link>
        </TableCell>
        <TableCell className="text-right">{transaction.amount} kr</TableCell>
      </TableRow>
    </>
  );
}
