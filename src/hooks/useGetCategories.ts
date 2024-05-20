import { getCategories } from "@/lib/getCategories";
import { Category } from "@/types/transactions";
import { useEffect, useState } from "react";

interface Categories {
  incomeCategories: Category[];
  expenseCategories: Category[];
}
export const useGetCategories = (): Categories => {
  console.log("kör useGetcategories");
    const [incomeCategories,setIncomeCategories]= useState<Category[]>([]);
    const [expenseCategories,setExpensCategories]= useState<Category[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const fetchedIncomeCategories = await getCategories("income_categories");
            const fetchedExpenseCategories = await getCategories("expenses_categories");
            if (fetchedIncomeCategories && fetchedExpenseCategories ) {
              setIncomeCategories(fetchedIncomeCategories);
              setExpensCategories(fetchedExpenseCategories);
            } else {
              console.log("Could not get cateogires");
            }
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
        
        fetchCategories();
      }, []);

      return {incomeCategories,expenseCategories};
}