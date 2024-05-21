import { Category } from "@/types/transactionsType";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
type BudgetCardProps = {
  category: Category;
};

export default function BudgetCard({ category }: BudgetCardProps) {
  return (
    <>
      <Card>
        <Link href={`budget/${category.id}`}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-bold">
              Spent:{" "}
              <span className="font-normal">
                {" "}
                {category.spentAmount}/{category.budgetLimit}
              </span>
            </p>
            <p className="font-bold">
              Budget Left:{" "}
              <span className="font-normal">
                {category.budgetLimit - category.spentAmount}
              </span>
            </p>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
