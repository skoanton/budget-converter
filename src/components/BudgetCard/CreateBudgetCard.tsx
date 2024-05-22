"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CreateBudgetCategoryModal from "./CreateBudgetCategoryModal";

type CreateBudgetCardProps = {
  collectionName: string;
};

export default function CreateBudgetCard({
  collectionName,
}: CreateBudgetCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Create a new category</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <CreateBudgetCategoryModal collectionName={collectionName} />
        </CardContent>
      </Card>
    </>
  );
}
