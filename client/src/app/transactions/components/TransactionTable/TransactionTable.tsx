"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TransactionRow from "./TransactionRow";
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
      <Table>
        <TableCaption>A list of your recent transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions &&
            transactions.map((transaction) => {
              return (
                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                />
              );
            })}
        </TableBody>
      </Table>
    </>
  );
}
