"use client";
import TransactionDetails from "@/components/TransactionDetails/TransactionDetails";
import { getTransactionById } from "@/lib/getTransactionById";
import { Transaction } from "@/types/transactionsType";
import { lstat } from "fs";
import { useEffect, useState } from "react";

export default function TransactionDetailsPage({
  params,
}: {
  params: { transactionId: string };
}) {
  console.log(params.transactionId);

  const [transaction, setTransaction] = useState<Transaction>();

  useEffect(() => {
    const fetchTransaction = async () => {
      const fetchedTransaction = await getTransactionById(params.transactionId);
      setTransaction(fetchedTransaction);
    };
    fetchTransaction();
  }, []);

  if (transaction) {
    return <TransactionDetails transaction={transaction} />;
  } else {
    return <div>No transaction</div>;
  }
}
