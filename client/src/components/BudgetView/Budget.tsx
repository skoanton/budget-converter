"use client";
import { deleteAllCategories } from "@/lib/categories/deleteAllCategories";
import { Button } from "../ui/button";
import BudgetView from "./BudgetView";
import { createCategory } from "@/lib/categories/createCategory";
import { CATEGORY_TYPES, COLLECTION_NAMES } from "@/constants/collectionsNames";
import SortBudget from "./SortBudget";
import { useState } from "react";

export default function Budget() {
  const [date, setDate] = useState<Date[]>();

  const onSetDate = (date: Date[]) => {
    setDate(date);
  };

  return (
    <>
      <SortBudget onSetDate={onSetDate} />
      <div className="flex flex-col gap-5">
        <BudgetView
          title={"Expense Budget"}
          categoryType={CATEGORY_TYPES.EXPENSE}
        />

        <BudgetView
          title={"Income Budget"}
          categoryType={CATEGORY_TYPES.INCOME}
        />

        <BudgetView
          title={"Saving Budget"}
          categoryType={CATEGORY_TYPES.SAVINGS}
        />
      </div>
    </>
  );
}
