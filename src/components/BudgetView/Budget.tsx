"use client";
import { deleteAllCategories } from "@/lib/categories/deleteAllCategories";
import { Button } from "../ui/button";
import BudgetView from "./BudgetView";
import { createCategory } from "@/lib/categories/createCategory";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

export default function Budget() {
  const expenseCategories = [
    "Försäkringar",
    "Hyra",
    "Lån",
    "Bensin",
    "Bil",
    "El",
    "Internet",
    "Mat",
    "Sjukhus",
    "Telefoni",
    "Bank",
    "Alkohol",
    "Casino/Betting",
    "Elektronik",
    "Event",
    "Hälsa",
    "Kläder",
    "Presenter",
    "Shopping",
    "Spel/Böcker",
    "Egna konton",
    "Streaming/Tjänster",
    "Swish",
    "Tobak",
    "Transport",
    "Träning",
    "Äta ute",
    "Övrigt",
  ];
  const incomeCategories = [
    "Aktier",
    "Ersättning",
    "Extra",
    "Lön",
    "Swish",
    "Skatteåterbäring",
    "CSN",
    "Egna konton",
  ];

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
        <div className="flex justify-center items-center flex-col gap-2">
          <Button onClick={deleteAllCategories}>Delete all categories</Button>
        </div>
      </div>
    </>
  );
}
