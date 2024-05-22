"use client";
import { deleteAllCategories } from "@/lib/categories/deleteAllCategories";
import { Button } from "../ui/button";
import BudgetView from "./BudgetView";
import { createCategory } from "@/lib/categories/createCategory";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

export default function Budget() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <BudgetView
          title={"Expense Budget"}
          collectionName={COLLECTION_NAMES.EXPENSES_CATEGORIES}
        />
        <hr />
        <BudgetView
          title={"Income Budget"}
          collectionName={COLLECTION_NAMES.INCOME_CATEGORIES}
        />
        {/* <div className="flex justify-center items-center flex-col gap-2">
          <Button onClick={deleteAllCategories}>Delete all categories</Button>
        </div> */}
      </div>
    </>
  );
}
