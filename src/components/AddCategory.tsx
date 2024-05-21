"use client";

import React, { Fragment, useState } from "react";
import CategoryForm from "./CategoryForm/CategoryForm";
import TransactionCard from "./Transactioncard/TransactionCard";
import { Transaction } from "@/types/transactionsType";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

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

  return (
    <>
      {transactions.map((transaction, index) => {
        return (
          currentForm === index && (
            <div
              key={transaction.id}
              className="flex flex-col justify-center items-center"
            >
              <TransactionCard key={transaction.id} transaction={transaction} />
              <CategoryForm
                categoryType={`${
                  transaction.amount < 0
                    ? COLLECTION_NAMES.EXPENSES_CATEGORIES
                    : COLLECTION_NAMES.INCOME_CATEGORIES
                }`}
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
