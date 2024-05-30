import { apiRequest } from "@/lib/api";
import { Category } from "@/types/categories";
import { sortCategory } from "@/utils/sortCategory";
import { useEffect, useState } from "react";

export const useGetCategories = () => {
  const [incomeCategories, setIncomeCategories] = useState<Category[]>([]);
  const [expenseCategories, setExpenseCategories] = useState<Category[]>([]);
  const [savingsCategories, setSavingsCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedIncomeCategories = await apiRequest("/categories/income");
        const fetchedExpenseCategories = await apiRequest("/categories/expense");
        const fetchedSavingsCategories = await apiRequest("/categories/savings");
        const sortedIncomeCategories = sortCategory(fetchedIncomeCategories);
        const sortedExpenseCategories = sortCategory(fetchedExpenseCategories);
        const sortedSavingsCategories = sortCategory(fetchedSavingsCategories);
        setIncomeCategories(sortedIncomeCategories);
        setExpenseCategories(sortedExpenseCategories);
        setSavingsCategories(sortedSavingsCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return { incomeCategories, expenseCategories,savingsCategories };
};
