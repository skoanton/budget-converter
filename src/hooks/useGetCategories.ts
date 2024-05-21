
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { getCategories } from "@/lib/categories/getCategories";
import { Category } from "@/types/transactionsType";
import { useEffect, useState } from "react";

interface Categories {
  incomeCategories: Category[];
  expenseCategories: Category[];
}
export const useGetCategories = (): Categories => {

    const [incomeCategories,setIncomeCategories]= useState<Category[]>([]);
    const [expenseCategories,setExpensCategories]= useState<Category[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const fetchedIncomeCategories = await getCategories(COLLECTION_NAMES.INCOME_CATEGORIES);
            const fetchedExpenseCategories = await getCategories(COLLECTION_NAMES.EXPENSES_CATEGORIES);
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