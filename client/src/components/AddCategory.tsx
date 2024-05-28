"use client";

import React, { Fragment, useState } from "react";
import CategoryForm from "./CategoryForm/CategoryForm";
import TransactionCard from "./Transactioncard/TransactionCard";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { Transaction } from "@/types/transactions";

type AddCategoryProps = {
  transactions: Transaction[];
  onHandleUpdateTransactions: (
    newCategorizedTransactions: Transaction[]
  ) => void;
};
export default function AddCategory({
  transactions,
  onHandleUpdateTransactions,
}: AddCategoryProps) {
  const [currentForm, setCurrentForm] = useState(0);
  console.log("Transactions in add category", transactions);
  return (
    <>
      {transactions.map((transaction, index) => {
        return (
          currentForm === index && (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <TransactionCard key={index} transaction={transaction} />
              <CategoryForm
                addCategory={true}
                transaction={transaction}
                transactions={transactions}
                onHandleUpdateTransactions={onHandleUpdateTransactions}
              />
            </div>
          )
        );
      })}
    </>
  );
}
