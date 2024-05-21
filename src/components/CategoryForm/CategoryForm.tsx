"use client";
import { useGetCategories } from "@/hooks/useGetCategories";

import { updateTransactions } from "@/lib/updateTransactions";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Category, Transaction } from "@/types/transactionsType";
import { addDescriptionToCategory } from "@/lib/categories/addDescriptionToCategory";
import { getCategoryById } from "@/lib/categories/getCategoryById";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { DocumentReference } from "firebase/firestore";
import { getCategoryRefById } from "@/lib/categories/getCategoryRefById";
import { truncateSync } from "fs";

const formSchema = z.object({
  category: z.string(),
});

type CategoryFormBaseProps = {
  changeCategory?: boolean;
  addCategory?: boolean;
};

type CategoryFormChangeProps = {
  changeCategory: true;
  transaction: Transaction;
  categoryType: string;
};

type CategoryFormAddProps = {
  addCategory: true;
  transaction: Transaction;
  transactions: Transaction[];
  categoryType: string;
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values.category);
  }
  const { expenseCategories, incomeCategories } = useGetCategories();
  console.log("Expense Categoires after hämting:", expenseCategories);
  const fetchCategory = async (
    inputCategory: string
  ): Promise<{
    currentCategoryRef: DocumentReference<Category> | null;
    currentCategory: Category | null;
    currentCollectionName: string;
  }> => {
    const collectionName =
      props.transaction.type === "expense"
        ? COLLECTION_NAMES.EXPENSES_CATEGORIES
        : COLLECTION_NAMES.INCOME_CATEGORIES;

    try {
      const fetchedCategoryRef = await getCategoryRefById(
        inputCategory,
        collectionName
      );

      if (!fetchedCategoryRef) {
        console.error("Could not fetch category ref");
        return {
          currentCategoryRef: null,
          currentCategory: null,
          currentCollectionName: collectionName,
        };
      }

      const fetchedCategory = await getCategoryById(
        fetchedCategoryRef.id,
        collectionName
      );

      if (!fetchedCategory) {
        console.error(" Could not fetch category");
        return {
          currentCategoryRef: null,
          currentCategory: null,
          currentCollectionName: collectionName,
        };
      }

      return {
        currentCategoryRef: fetchedCategoryRef,
        currentCategory: fetchedCategory,
        currentCollectionName: collectionName,
      };
    } catch (error) {
      console.error("An error occurred while fetching category:", error);
      return {
        currentCategoryRef: null,
        currentCategory: null,
        currentCollectionName: collectionName,
      };
    }
  };

  const handleSubmit = async (inputCategory: string) => {
    try {
      const { currentCategoryRef, currentCategory, currentCollectionName } =
        await fetchCategory(inputCategory);

      if (currentCategoryRef && currentCategory) {
        console.log("Current category:", currentCategory);
        if (isAddCategory(props)) {
          const { transaction, transactions, onHandleUpdateTransactions } =
            props;
          try {
            await addDescriptionToCategory(
              transaction.description,
              currentCategory,
              currentCollectionName
            );
            const newCategorizedTransactions = transactions.filter(
              (trans) => trans.description === transaction.description
            );

            newCategorizedTransactions.forEach((trans) => {
              trans.category = currentCategoryRef;
            });

            onHandleUpdateTransactions(newCategorizedTransactions);
          } catch (error) {
            console.error(
              `Could not add ${transaction.description} to ${currentCategory.name}`
            );
          }
        }

        if (isChangeCategory(props)) {
          const { transaction } = props;

          const newTransactionData: Transaction = {
            ...transaction,
            category: currentCategoryRef,
          };
          try {
            updateTransactions(newTransactionData);
          } catch (error) {
            console.error(
              `Could not update transaction "${transaction.id}". Error:`,
              error
            );
          }
        }
      } else {
        console.error("No such category found.");
      }
    } catch (error) {
      console.error("Could not fetch categories. Error:", error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {props.categoryType ===
                        COLLECTION_NAMES.EXPENSES_CATEGORIES ? (
                          expenseCategories.length > 0 ? (
                            expenseCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="None">
                              No Categories found
                            </SelectItem>
                          )
                        ) : props.categoryType ===
                          COLLECTION_NAMES.INCOME_CATEGORIES ? (
                          incomeCategories.length > 0 ? (
                            incomeCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="None">
                              No Categories found
                            </SelectItem>
                          )
                        ) : (
                          <SelectItem value="None">
                            No Categories found
                          </SelectItem>
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {props.changeCategory ? "Change" : "Add"}
          </Button>
        </form>
      </Form>
    </>
  );
}
