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
};

type CategoryFormAddProps = {
  addCategory: true;
  transaction: Transaction;
  transactions: Transaction[];
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
    if (isAddCategory(props)) {
      const { transaction, transactions, onHandleUpdateTransactions } = props;
      const categoryId = formdata.get("categories") as string;
      const currentCategory = categories.find(
        (category) => category.id === categoryId
      );
      if (currentCategory) {
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
      } else {
        console.log("no such category");
      }
    }

    if (isChangeCategory(props)) {
      const { transaction } = props;
      const newTransactionData: Transaction = {
        ...transaction,
        category: formdata.get("categories") as string,
      };

      updateTransactions(newTransactionData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Add to Category</label>
      <select name="categories">
        {categories ? (
          categories.map((category) => {
            return (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            );
          })
        ) : (
          <option>No Categories found</option>
        )}
      </select>
      <button type="submit">{props.changeCategory ? "Change" : "Add"}</button>
    </form>
  );
}
