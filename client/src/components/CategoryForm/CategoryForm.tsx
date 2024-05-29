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
  category: z.string(),
});

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
  const { transactions, updateTransaction } = useTransactionStore.getState();
  const { expenseCategories, incomeCategories } = useGetCategories();
  const { entity: currentCategoryType } = useGetEntityById<CategoryType>(
    props.transaction.amount > 0 ? 1 : 2,
    "/categories/types"
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values.category);
  }

  const fetchAndAddCategory = async (
    transaction: Transaction,
    categoryID: string
  ) => {
    const category = await getEntitiyById<Category>(
      Number(categoryID),
      "/categories"
    );

    if (category) {
      console.log("Fetched category:", category);
      try {
        const newCategorizedTransactions = transactions.filter((trans) => {
          return (
            trans.description_ID === transaction.description_ID &&
            Math.sign(trans.amount) === Math.sign(transaction.amount) // Lägger bara till descriptions med samma value (+ eller -)
          );
        });

        newCategorizedTransactions.forEach((trans) => {
          updateTransaction(trans.id!, category.id!);
        });
      } catch (error) {
        console.error(
          "Error adding description to category or updating transactions:",
          error
        );
      }
    } else {
      console.error("Current category is undefiend");
    }
  };

  const handleSubmit = async (categoryID: string) => {
    if (isAddCategory(props)) {
      const { transaction } = props;
      await fetchAndAddCategory(transaction, categoryID);
    }

    if (isChangeCategory(props)) {
      const { transaction } = props;
      if (transaction.id) {
        updateTransaction(transaction.id, Number(categoryID));
      } else {
        console.error("No transaction ID");
      }
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
