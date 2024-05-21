
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { getCategories } from "@/lib/categories/getCategories";
import { Category } from "@/types/transactionsType";
import { sortCategory } from "@/utils/sortCategory";
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
            const {expenseCategories,incomeCategories} = await getCategories();
            console.log("Expensecategories inne i use:", expenseCategories);
            if (expenseCategories && incomeCategories ) {
              const sortredIncomeCategories = sortCategory(incomeCategories);
              const sortredExpensCategories = sortCategory(expenseCategories);
              setIncomeCategories(sortredIncomeCategories);
              setExpensCategories(sortredExpensCategories);
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