"use client";
import { useGetCategories } from "@/hooks/useGetCategories";
import React, { useState } from "react";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Transaction } from "@/types/transactions";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { fetchAndAddCategory } from "@/utils/categoryUtils";
import CategorySelectGroup from "./CategorySelectGroup";

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
  const { expenseCategories, incomeCategories, savingsCategories } =
    useGetCategories();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values.categoryId);
  }

  const handleSubmit = async (categoryID: string) => {
    if (props.addCategory === props.changeCategory) {
      console.error(
        "Either addCategory or changeCategory must be true, but not both or neither."
      );
      return;
    }

    if (props.addCategory) {
      try {
        await fetchAndAddCategory(
          props.transaction,
          categoryID,
          transactions,
          updateTransaction
        );
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
                      <CategorySelectGroup
                        title="Expense"
                        categories={expenseCategories}
                      />
                      <CategorySelectGroup
                        title="Income"
                        categories={incomeCategories}
                      />
                      <CategorySelectGroup
                        title="Savings"
                        categories={savingsCategories}
                      />
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
