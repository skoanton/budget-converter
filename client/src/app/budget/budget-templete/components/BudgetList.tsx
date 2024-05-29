"use client";
import { Button } from "@/components/ui/button";
import { CATEGORY_TYPES } from "@/constants/collectionsNames";
import { deletePost } from "@/lib/deletePost";
import { getEntites } from "@/lib/getEntites";
import { useCategoryStore } from "@/lib/store/useCategoriesStore";
import { Category } from "@/types/categories";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type BudgetListProps = {
  categoryType: {
    name: string;
    id: number;
  };
};

export default function BudgetList({ categoryType }: BudgetListProps) {
  const { setCategories, clearCategories, deleteCategory } = useCategoryStore();
  const categories = useCategoryStore((state) => {
    switch (categoryType.name) {
      case CATEGORY_TYPES.INCOME.name:
        return state.incomeCategories;
      case CATEGORY_TYPES.EXPENSE.name:
        return state.expenseCategories;
      case CATEGORY_TYPES.SAVINGS.name:
        return state.savingsCategories;
      default:
        return [];
    }
  });

  useEffect(() => {
    const fetchCategories = async () => {
      clearCategories();
      const fetchedCategories = await getEntites<Category>(
        `/categories/${categoryType.name}`
      );
      if (fetchedCategories) {
        setCategories(fetchedCategories);
      }
    };
    fetchCategories();
  }, [categoryType]);

  const handleDelete = async (category: Category) => {
    deleteCategory(category);
    await deletePost(category.id!.toString(), "/categories");
  };

  return (
    <>
      <ul>
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return (
              <div key={category.id}>
                <li className="flex gap-5">
                  <p className="text-xl font-bold">{category.name}</p>
                  <p className="text-xl font-bold">{category.budget} kr</p>
                  <Button
                    variant={"ghost"}
                    onClick={() => handleDelete(category)}
                  >
                    <Trash2 />
                  </Button>
                </li>
                <hr />
              </div>
            );
          })}
      </ul>
    </>
  );
}
