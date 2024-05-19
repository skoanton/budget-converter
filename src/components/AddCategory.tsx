"use client";
import { Transaction } from "@/types/transactions";
import { useState } from "react";
import CategoryForm from "./CategoryForm/CategoryForm";

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
            <div key={transaction.id}>
              <h2>{transaction.description}</h2>
              <p>Amount: {transaction.amount}</p>
              <p>Datum: {transaction.date.toLocaleDateString()}</p>
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
