"use client";

import React, { useState } from "react";
import CategoryForm from "./CategoryForm/CategoryForm";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import TransactionCard from "@/app/add-transactions/components/TransactionCard";

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
