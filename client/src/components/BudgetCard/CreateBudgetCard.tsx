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
      <Card className="flex justify-center items-center">
        {/*   <CardHeader>
          <CardTitle>Create a new category</CardTitle>
        </CardHeader> */}
        <CardContent>
          <CreateBudgetCategoryModal collectionName={collectionName} />
        </CardContent>
      </Card>
    </>
  );
}
