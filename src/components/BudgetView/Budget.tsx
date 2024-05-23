"use client";
import { deleteAllCategories } from "@/lib/categories/deleteAllCategories";
import { Button } from "../ui/button";
import BudgetView from "./BudgetView";
import { createCategory } from "@/lib/categories/createCategory";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
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
          collectionName={COLLECTION_NAMES.EXPENSES_CATEGORIES}
        />
        <hr />
        <BudgetView
          title={"Income Budget"}
          collectionName={COLLECTION_NAMES.INCOME_CATEGORIES}
        />
        {/* <div className="flex justify-center items-center flex-col gap-2">
          <Button onClick={deleteAllCategories}>Delete all categories</Button>
        </div> */}
      </div>
    </>
  );
}
