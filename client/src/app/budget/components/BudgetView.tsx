"use client";

import { useGetCategories } from "@/hooks/useGetCategories";

import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BudgetCard from "./BudgetCard";
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
                  {expenseCategories.length > 0 &&
                    expenseCategories.map((expenseCategory) => (
                      <BudgetCard
                        key={expenseCategory.id}
                        category={expenseCategory}
                        categoryType={categoryType}
                      />
                    ))}
                </>
              ) : categoryType === CATEGORY_TYPES.INCOME ? (
                <>
                  {incomeCategories.length > 0 &&
                    incomeCategories.map((incomeCategory) => (
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