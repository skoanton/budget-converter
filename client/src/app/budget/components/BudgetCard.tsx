"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import { Category } from "@/types/categories";
import { useEffect, useState } from "react";
import { getMonthlyExpense } from "@/lib/categories/getMonthlyExpense";
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
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const fetchedAmount = await getMonthlyExpense(category, date);

        if (fetchedAmount) {
          setTotalAmount(fetchedAmount.total_amount);
        } else {
          console.log("fetched amount is empty bitch");
        }
      } catch (error) {
        console.error("could not fetch total amount in useeffect", error);
      }
    };
    fetchTotalAmount();
  }, [date]);

  const spentAmount = Math.round(Math.abs(category.spent));
  const budgetDif = Math.round(Math.abs(category.spent)) - category.budget;

  return (
    <>
      <Card>
        <Link href={`budget/${category.id}`}>
          <CardHeader className=" flex-row justify-between items-center">
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>

          <CardContent>
            {categoryType === CATEGORY_TYPES.INCOME ? (
              <>
                <p className="font-bold">
                  Income:{" "}
                  <span className="font-normal">
                    {" "}
                    {totalAmount}/{category.budget} kr
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
