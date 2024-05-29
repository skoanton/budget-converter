"use client";
import { useGetCategories } from "@/hooks/useGetCategories";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import { Transaction } from "@/types/transactions";
import { Category, CategoryType } from "@/types/categories";
import { useGetEntityById } from "@/hooks/useGetEntityById";
import { getEntitiyById } from "@/lib/getEntityById";
import { useTransactionStore } from "@/lib/store/useTransactionStore";

const formSchema = z.object({
  categoryId: z.string(),
});

type CategoryFormProps = {
  transaction: Transaction;
} & (
  | { changeCategory: true; addCategory?: false }
  | { changeCategory?: false; addCategory: true }
);

export default function CategoryForm(props: CategoryFormProps) {
  const { transactions, updateTransaction } = useTransactionStore.getState();
  const { expenseCategories, incomeCategories } = useGetCategories();
  const { entity: currentCategoryType } = useGetEntityById<CategoryType>(
    props.transaction.amount > 0 ? 1 : 2,
    "/categories/types"
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values.categoryId);
  }

  const addNewCategory = (transaction: Transaction, category: Category) => {
    const newCategorizedTransactions = transactions.filter((trans) => {
      return (
        trans.description_ID === transaction.description_ID &&
        Math.sign(trans.amount) === Math.sign(transaction.amount) // Lägger bara till descriptions med samma value (+ eller -)
      );
    });

    newCategorizedTransactions.forEach((trans) => {
      if (typeof trans.id === "string") {
        updateTransaction(trans.id, category.id!);
      } else {
        console.error("Transaction ID is not a string");
      }
    });
  };

  const fetchAndAddCategory = async (
    transaction: Transaction,
    categoryID: string
  ) => {
    try {
      const category = await getEntitiyById<Category>(
        Number(categoryID),
        "/categories"
      );
      if (category) {
        addNewCategory(transaction, category);
      } else {
        console.error("Fetched category is undefined");
      }
    } catch (error) {
      console.error("Could not fetch category by ID", error);
    }
  };

  const handleSubmit = async (categoryID: string) => {
    console.log("ADD CATEGORY:", props.addCategory);
    console.log("CHANGE CATEGORY:", props.changeCategory);
    if (props.addCategory === props.changeCategory) {
      console.error(
        "Either addCategory or changeCategory must be true, but not both or neither."
      );
      return;
    }

    if (props.addCategory) {
      try {
        await fetchAndAddCategory(props.transaction, categoryID);
        console.log("Added transaction to category");
      } catch (error) {
        console.error("Could not fetch and add category", error);
      }
    }

    if (props.changeCategory) {
      console.log("inside changeCategory");
      if (typeof props.transaction.id === "string") {
        updateTransaction(props.transaction.id, Number(categoryID));
      } else {
        console.error("Transaction ID is not a string");
      }
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="categoryId"
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
                        {currentCategoryType?.id ===
                        CATEGORY_TYPES.EXPENSE.id ? (
                          expenseCategories.length > 0 ? (
                            expenseCategories.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.id!.toString()}
                              >
                                {category.name}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="None">
                              No Expense Categories Found
                            </SelectItem>
                          )
                        ) : currentCategoryType?.id ===
                          CATEGORY_TYPES.INCOME.id ? (
                          incomeCategories.length > 0 ? (
                            incomeCategories.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.id!.toString()}
                              >
                                {category.name}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="None">
                              No Income Categories Found
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
