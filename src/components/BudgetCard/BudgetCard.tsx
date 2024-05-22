"use client";
import { Category } from "@/types/transactionsType";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { deleteCategory } from "@/lib/categories/deleteCategory";
import { Button } from "../ui/button";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
type BudgetCardProps = {
  category: Category;
  collectionName: string;
};

export default function BudgetCard({
  category,
  collectionName,
}: BudgetCardProps) {
  const handleDelete = async () => {
    console.log("Category id:", category.id);
    console.log("Collectionname:", collectionName);
    await deleteCategory(collectionName, category.id);
  };

  const spentAmount = Math.round(Math.abs(category.spentAmount));
  const budgetDif =
    Math.round(Math.abs(category.spentAmount)) - category.budgetLimit;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
          <Button onClick={handleDelete}>Delete category</Button>
        </CardHeader>
        <Link href={`budget/${category.id}`}>
          <CardContent>
            {collectionName === COLLECTION_NAMES.INCOME_CATEGORIES ? (
              <>
                <p className="font-bold">
                  Income:{" "}
                  <span className="font-normal">
                    {" "}
                    {spentAmount}/{category.budgetLimit} kr
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
              collectionName === COLLECTION_NAMES.EXPENSES_CATEGORIES && (
                <>
                  <p className="font-bold">
                    Spent:{" "}
                    <span className="font-normal">
                      {" "}
                      {Math.round(Math.abs(category.spentAmount))}/
                      {category.budgetLimit} kr
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
