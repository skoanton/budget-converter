"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CreateBudgetCategoryModal from "./CreateBudgetCategoryModal";

type CreateBudgetCardProps = {
  categoryType: {
    name: string;
    id: number;
  };
};

export default function CreateBudgetCard({
  categoryType,
}: CreateBudgetCardProps) {
  return (
    <>
      <Card className="flex justify-center items-center">
        <CardHeader>
          <CardTitle>Create a new category</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateBudgetCategoryModal categoryType={categoryType} />
        </CardContent>
      </Card>
    </>
  );
}
