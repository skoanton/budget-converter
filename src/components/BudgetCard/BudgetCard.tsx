"use client";
import { Category } from "@/types/transactionsType";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { deleteCategory } from "@/lib/categories/deleteCategory";
import { Button } from "../ui/button";
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

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
          <Button onClick={handleDelete}>Delete category</Button>
        </CardHeader>
        <Link href={`budget/${category.id}`}>
          <CardContent>
            <p className="font-bold">
              Spent:{" "}
              <span className="font-normal">
                {" "}
                {Math.round(Math.abs(category.spentAmount))}/
                {category.budgetLimit} kr
              </span>
            </p>
            <p className="font-bold">
              Budget Left:{" "}
              <span className="font-normal">
                {category.budgetLimit -
                  Math.round(Math.abs(category.spentAmount))}{" "}
                kr
              </span>
            </p>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
