"use client";

import { useGetEntityById } from "@/hooks/useGetEntityById";
import { getEntites } from "@/lib/getEntites";
import { getEntitiyById } from "@/lib/getEntityById";
import { Transaction } from "@/types/transactions";
import { lstat } from "fs";
import { useEffect, useState } from "react";
import TransactionDetails from "./components/TransactionDetails";
import Loading from "@/components/Loading/Loading";

export default function TransactionDetailsPage({
  params,
}: {
  params: { transactionId: string };
}) {
  const { entity: transaction, loading } = useGetEntityById<Transaction>(
    Number(params.transactionId),
    "/transactions"
  );

  if (loading) {
    return <Loading />;
  }

  if (transaction) {
    return <TransactionDetails transaction={transaction} />;
  } else {
    return <div>No transaction</div>;
  }
}
