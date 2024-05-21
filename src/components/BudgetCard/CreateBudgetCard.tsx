import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function CreateBudgetCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Create a new category</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button>
            <Plus />
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
