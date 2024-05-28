import { apiRequest } from "@/lib/api";
import { Category } from "@/types/categories";
import { useEffect, useState } from "react";

export const useGetCategories = () => {
  const [incomeCategories, setIncomeCategories] = useState<Category[]>([]);
  const [expenseCategories, setExpenseCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedIncomeCategories = await apiRequest("/categories/income");
        const fetchedExpenseCategories = await apiRequest("/categories/expense");
        setIncomeCategories(fetchedIncomeCategories as Category[]);
        setExpenseCategories(fetchedExpenseCategories as Category[]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return { incomeCategories, expenseCategories };
};
