import { CATEGORY_TYPES, COLLECTION_NAMES } from "@/constants/collectionsNames";
import { db } from "@/lib/firebase";
import { Category } from "@/types/categories";

import { sortCategory } from "@/utils/sortCategory";
import axios from "axios";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { number, string } from "zod";

interface Categories {
  incomeCategories: Category[];
  expenseCategories: Category[];
}

interface CategoryType{
  name: string,
  id:number;
}

export const useGetCategories = (categoryType:CategoryType): Categories => {
    const [incomeCategories,setIncomeCategories]= useState<Category[]>([]);
    const [expenseCategories,setExpenseCategories]= useState<Category[]>([]);
    useEffect(() => {
      
      const fetchCategories = async () => {
        if (categoryType === CATEGORY_TYPES.INCOME) {
          try {
            const fetchedIncomeCategories = await axios.get(
              "http://localhost:8801/api/categories/income"
            );
            console.log("fetchedIncomecategories", fetchedIncomeCategories.data);
            setIncomeCategories(fetchedIncomeCategories.data as Category[]);
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        }
        if (categoryType === CATEGORY_TYPES.EXPENSE) {
          try {
            const fetchedExpenseCategories = await axios.get(
              "http://localhost:8801/api/categories/expense"
            );
            console.log(
              "fetchedExpenseCategories",
              fetchedExpenseCategories.data
            );
            setExpenseCategories(fetchedExpenseCategories.data as Category[]);
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        }
      };

        fetchCategories();
       
      }, []);

      return {incomeCategories,expenseCategories};
}