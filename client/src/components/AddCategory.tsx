"use client";

import React, { useState } from "react";
import CategoryForm from "./CategoryForm/CategoryForm";
import TransactionCard from "./Transactioncard/TransactionCard";
import { useTransactionStore } from "@/lib/store/useTransactionStore";

export default function AddCategory() {
  const [currentForm, setCurrentForm] = useState(0);

  const { uncategorizedTransactions } = useTransactionStore.getState();
  console.log(uncategorizedTransactions);
  return (
    <>
      {uncategorizedTransactions.map((transaction, index) => {
        return (
          currentForm === index && (
            <div
              key={transaction.id}
              className="flex flex-col justify-center items-center"
            >
              <TransactionCard transaction={transaction} />
              <CategoryForm addCategory={true} transaction={transaction} />
            </div>
          )
        );
      })}
    </>
  );
}
