"use client";
import CreateBudgetCard from "../BudgetCard/CreateBudgetCard";
import { Button } from "../ui/button";
import { deleteAllCategories } from "@/lib/categories/deleteAllCategories";
import { useGetCategories } from "@/hooks/useGetCategories";
import BudgetCard from "../BudgetCard/BudgetCard";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
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
  collectionName: string;
};

export default function BudgetView({ title, collectionName }: BudgetViewProps) {
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
              {collectionName === COLLECTION_NAMES.EXPENSES_CATEGORIES ? (
                <>
                  <CreateBudgetCard
                    collectionName={COLLECTION_NAMES.EXPENSES_CATEGORIES}
                  />
                  {expenseCategories.map((expenseCategory) => (
                    <BudgetCard
                      key={expenseCategory.id}
                      category={expenseCategory}
                      collectionName={collectionName}
                    />
                  ))}
                </>
              ) : collectionName === COLLECTION_NAMES.INCOME_CATEGORIES ? (
                <>
                  <CreateBudgetCard
                    collectionName={COLLECTION_NAMES.INCOME_CATEGORIES}
                  />
                  {incomeCategories.map((incomeCategory) => (
                    <BudgetCard
                      key={incomeCategory.id}
                      category={incomeCategory}
                      collectionName={collectionName}
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
