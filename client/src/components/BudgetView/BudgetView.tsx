"use client";
import CreateBudgetCard from "../BudgetCard/CreateBudgetCard";
import { Button } from "../ui/button";
import { deleteAllCategories } from "@/lib/categories/deleteAllCategories";
import { useGetCategories } from "@/hooks/useGetCategories";
import BudgetCard from "../BudgetCard/BudgetCard";
import { CATEGORY_TYPES, COLLECTION_NAMES } from "@/constants/collectionsNames";
import { useEffect, useState } from "react";
import { Category } from "@/types/transactionsType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SortBudget from "./SortBudget";
type BudgetViewProps = {
  title: string;
  categoryType: {
    name: string;
    id: number;
  };
};

export default function BudgetView({ title, categoryType }: BudgetViewProps) {
  const { expenseCategories, incomeCategories } = useGetCategories();
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl font-bold">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 gap-2">
              {categoryType === CATEGORY_TYPES.EXPENSE ? (
                <>
                  <CreateBudgetCard categoryType={CATEGORY_TYPES.EXPENSE} />
                  {expenseCategories.map((expenseCategory) => (
                    <BudgetCard
                      key={expenseCategory.id}
                      category={expenseCategory}
                      categoryType={categoryType}
                    />
                  ))}
                </>
              ) : categoryType === CATEGORY_TYPES.INCOME ? (
                <>
                  <CreateBudgetCard categoryType={CATEGORY_TYPES.INCOME} />
                  {incomeCategories.map((incomeCategory) => (
                    <BudgetCard
                      key={incomeCategory.id}
                      category={incomeCategory}
                      categoryType={categoryType}
                    />
                  ))}
                </>
              ) : null}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
