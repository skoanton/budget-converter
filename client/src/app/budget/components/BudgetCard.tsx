"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import { Category } from "@/types/categories";
import { useEffect, useState } from "react";
import { getMonthlyExpense } from "@/lib/categories/getMonthlyExpense";
import BudgetCardInformation from "./BudgetCardInformation";
type BudgetCardProps = {
  category: Category;
  categoryType: {
    name: string;
    id: number;
  };
  date: Date[];
};

export default function BudgetCard({
  category,
  categoryType,
  date,
}: BudgetCardProps) {
  return (
    <>
      <Card>
        <Link href={`budget/${category.id}`}>
          <CardHeader className=" flex-row justify-between items-center">
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>

          <CardContent>
            {categoryType === CATEGORY_TYPES.INCOME ? (
              <BudgetCardInformation category={category} date={date} />
            ) : categoryType === CATEGORY_TYPES.EXPENSE ? (
              <BudgetCardInformation category={category} date={date} />
            ) : categoryType === CATEGORY_TYPES.SAVINGS ? (
              <BudgetCardInformation category={category} date={date} />
            ) : null}
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
