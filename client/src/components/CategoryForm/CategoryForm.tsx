"use client";
import { useGetCategories } from "@/hooks/useGetCategories";
import { updateTransactions } from "@/lib/updateTransactions";
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
import { addDescriptionToCategory } from "@/lib/categories/addDescriptionToCategory";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import { Transaction } from "@/types/transactions";
import { Category, CategoryType } from "@/types/categories";
import { useGetEntityById } from "@/hooks/useGetEntityById";
import { getEntitiyById } from "@/lib/getEntityById";

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
  const { expenseCategories, incomeCategories } = useGetCategories();
  const [category, setCategory] = useState<Category | null>(null);
  /*  const { entity: category } = useGetEntityById<Category>(
    props.transaction.category_ID,
    "/categories"
  ); */
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

  const fetchCategory = async (categoryId: string) => {
    const fetchedCategory = await getEntitiyById<Category>(
      Number(categoryId),
      "/categories"
    );
    setCategory(fetchedCategory);
  };

  const handleSubmit = async (inputCategory: string) => {
    if (isAddCategory(props)) {
      const { transaction, transactions, onHandleUpdateTransactions } = props;
      try {
        await fetchCategory(inputCategory);
        if (category) {
          await addDescriptionToCategory(transaction.description_ID, category);

          const newCategorizedTransactions = transactions.filter((trans) => {
            return (
              trans.description_ID === transaction.description_ID &&
              Math.sign(trans.amount) === Math.sign(transaction.amount) // Lägger bara till descriptions med samma value (+ eller -)
            );
          });

          newCategorizedTransactions.forEach((trans) => {
            trans.category_ID = category.id!;
          });

          onHandleUpdateTransactions(newCategorizedTransactions);
        } else {
          console.error("Current category is undefiend");
        }
      } catch (error) {
        console.error(
          `Could not add ${transaction.description_ID} to ${category?.id}`
        );
      }
    }

    if (isChangeCategory(props)) {
      if (category) {
        const { transaction } = props;

        const newTransactionData: Transaction = {
          ...transaction,
          category_ID: category.id!,
        };

        await updateTransactions(newTransactionData);
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
