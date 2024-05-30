"use client";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";

import { Button } from "@/components/ui/button";
import { useCategoryStore } from "@/lib/store/useCategoriesStore";
import { uploadCategories } from "@/lib/categories/uploadCategories";
import { useState } from "react";
import BudgetAccordion from "./BudgetAccordion";

export default function BudgetSectionGroup() {
  const newCategories = useCategoryStore((state) => state.newCategories);
  const { clearNewCategories } = useCategoryStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSaveBudget = async () => {
    setIsLoading(true);
    await uploadCategories(newCategories);
    clearNewCategories();
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <BudgetAccordion
        title="Expense Budget"
        categoryType={CATEGORY_TYPES.EXPENSE}
      />
      <BudgetAccordion
        title="Income Budget"
        categoryType={CATEGORY_TYPES.INCOME}
      />
      <BudgetAccordion
        title="Savings Budget"
        categoryType={CATEGORY_TYPES.SAVINGS}
      />
      <Button onClick={handleSaveBudget}>
        {isLoading ? "Saving.." : "Save"}
      </Button>
    </div>
  );
}
