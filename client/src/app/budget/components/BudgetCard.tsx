"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import { Category } from "@/types/categories";
type BudgetCardProps = {
  category: Category;
  categoryType: {
    name: string;
    id: number;
  };
};

export default function BudgetCard({
  category,
  categoryType,
}: BudgetCardProps) {
  const spentAmount = Math.round(Math.abs(category.spent));
  const budgetDif = Math.round(Math.abs(category.spent)) - category.budget;

  return (
    <>
      <Card>
        <CardHeader className=" flex-row justify-between items-center">
          <CardTitle>{category.name}</CardTitle>
        </CardHeader>
        <Link href={`budget/${category.id}`}>
          <CardContent>
            {categoryType === CATEGORY_TYPES.INCOME ? (
              <>
                <p className="font-bold">
                  Income:{" "}
                  <span className="font-normal">
                    {" "}
                    {spentAmount}/{category.budget} kr
                  </span>
                </p>
                <p className="font-bold">
                  Budget difference:{" "}
                  <span
                    className={`${
                      budgetDif < 0 ? "text-red-500" : "text-green-500"
                    } font normal`}
                  >
                    {Math.abs(budgetDif)} kr
                  </span>
                </p>
              </>
            ) : (
              categoryType === CATEGORY_TYPES.EXPENSE && (
                <>
                  <p className="font-bold">
                    Spent:{" "}
                    <span className="font-normal">
                      {" "}
                      {Math.round(Math.abs(category.spent))}/{category.budget}{" "}
                      kr
                    </span>
                  </p>
                  <p className="font-bold">
                    Budget difference:{" "}
                    <span
                      className={`${
                        budgetDif > 0 ? "text-red-500" : "text-green-500"
                      } font normal`}
                    >
                      {Math.abs(budgetDif)} kr
                    </span>
                  </p>
                </>
              )
            )}
          </CardContent>
        </Link>
      </Card>
    </>
  );
}