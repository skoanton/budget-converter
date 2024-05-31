"use client";

import BudgetView from "./BudgetView";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import SortBudget from "./SortBudget";
import { useState } from "react";
import { getDaysInMonth } from "@/utils/getDaysInMonth";

export default function Budget() {
  const [date, setDate] = useState<Date[]>(
    getDaysInMonth(new Date().getFullYear(), new Date().getMonth())
  );
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
          date={date}
        />

        <BudgetView
          title={"Income Budget"}
          categoryType={CATEGORY_TYPES.INCOME}
          date={date}
        />

        <BudgetView
          title={"Saving Budget"}
          categoryType={CATEGORY_TYPES.SAVINGS}
          date={date}
        />
      </div>
    </>
  );
}
