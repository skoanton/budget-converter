"use client";
import { useGetCategories } from "@/hooks/useGetCategories";
import { addDescriptionToCategory } from "@/lib/addDescriptionToCategory";
import { getCategories } from "@/lib/getCategories";
import { updateTransactions } from "@/lib/updateTransactions";
import { Category, Transaction } from "@/types/transactions";
import React, { useEffect, useState } from "react";

type CategoryFormBaseProps = {
  changeCategory?: boolean;
  addCategory?: boolean;
};

type CategoryFormChangeProps = {
  changeCategory: true;
  transaction: Transaction;
  categoryType: "expenses" | "income";
};

type CategoryFormAddProps = {
  addCategory: true;
  transaction: Transaction;
  transactions: Transaction[];
  categoryType: "expenses" | "income";
  onHandleUpdateTransactions: (
    newCategorizedTransactions: Transaction[]
  ) => void;
};

type CategoryFormProps = CategoryFormBaseProps &
  (CategoryFormChangeProps | CategoryFormAddProps);

function isChangeCategory(
  props: CategoryFormProps
): props is CategoryFormChangeProps {
  return props.changeCategory === true;
}

function isAddCategory(
  props: CategoryFormProps
): props is CategoryFormAddProps {
  return props.addCategory === true;
}

export default function CategoryForm(props: CategoryFormProps) {
  const categories = useGetCategories();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const categoryId = formdata.get("categories") as string;
    const currentCategory =
      props.categoryType === "expenses"
        ? categories.expenseCategories.find(
            (category) => category.id === categoryId
          )
        : categories.incomeCategories.find(
            (category) => category.id === categoryId
          );
    if (currentCategory) {
      if (isAddCategory(props)) {
        const { transaction, transactions, onHandleUpdateTransactions } = props;
        console.log("Category ID:", categoryId);
        await addDescriptionToCategory(
          transaction.description,
          currentCategory
        );
        addDescriptionToCategory(transaction.description, currentCategory);
        const newCategorizedTransactions = transactions.filter(
          (trans) => trans.description === transaction.description
        );

        newCategorizedTransactions.forEach((trans) => {
          trans.category = currentCategory.name;
        });

        onHandleUpdateTransactions(newCategorizedTransactions);
      }

      if (isChangeCategory(props)) {
        const { transaction } = props;

        const newTransactionData: Transaction = {
          ...transaction,
          category: currentCategory.name,
        };

        updateTransactions(newTransactionData);
      }
    } else {
      console.log("no such category");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="categories">Add to Category</label>
      <select name="categories" id="categories">
        {props.categoryType === "expenses" ? (
          categories.expenseCategories.length > 0 ? (
            categories.expenseCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          ) : (
            <option>No Categories found</option>
          )
        ) : props.categoryType === "income" ? (
          categories.incomeCategories.length > 0 ? (
            categories.incomeCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          ) : (
            <option>No Categories found</option>
          )
        ) : (
          <option>No Categories found</option>
        )}
      </select>
      <button type="submit">{props.changeCategory ? "Change" : "Add"}</button>
    </form>
  );
}
