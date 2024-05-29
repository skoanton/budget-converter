"use client";

import React, { Fragment, useState } from "react";
import CategoryForm from "./CategoryForm/CategoryForm";
import TransactionCard from "./Transactioncard/TransactionCard";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { Transaction } from "@/types/transactions";
import { useTransactionStore } from "@/lib/store/useTransactionStore";

export default function AddCategory() {
  const [currentForm, setCurrentForm] = useState(0);

  const { uncategorizedTransactions } = useTransactionStore.getState();

  return (
    <>
      {uncategorizedTransactions.map((transaction, index) => {
        return (
          currentForm === index && (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <TransactionCard key={index} transaction={transaction} />
              <CategoryForm addCategory={true} transaction={transaction} />
            </div>
          )
        );
      })}
    </>
  );
}
