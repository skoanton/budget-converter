"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { createCategory } from "@/lib/categories/createCategory";

import CreateBudgetCategoryForm from "./CreateBudgetCategoryForm";
import { useState } from "react";

type CreateBudgetCategoryModalProps = {
  collectionName: string;
};

export default function CreateBudgetCategoryModal({
  collectionName,
}: CreateBudgetCategoryModalProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create category</DialogTitle>
            <DialogDescription>Create a new category</DialogDescription>
          </DialogHeader>
          <CreateBudgetCategoryForm
            onSetIsDialogOpen={setIsDialogOpen}
            collectionName={collectionName}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
