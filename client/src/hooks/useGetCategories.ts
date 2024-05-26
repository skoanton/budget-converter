import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import { db } from "@/lib/firebase";
import { Category } from "@/types/transactionsType";
import { sortCategory } from "@/utils/sortCategory";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Categories {
  incomeCategories: Category[];
  expenseCategories: Category[];
}
export const useGetCategories = (): Categories => {
    const [incomeCategories,setIncomeCategories]= useState<Category[]>([]);
    const [expenseCategories,setExpensCategories]= useState<Category[]>([]);
    useEffect(() => {
      
          try {
            const expenseCategoryQuery = query(
              collection(db, COLLECTION_NAMES.EXPENSES_CATEGORIES)
            );
            const incomeCategoryQuery = query(
              collection(db, COLLECTION_NAMES.INCOME_CATEGORIES)
            );
        
            const expenseCategoryListner = onSnapshot(
              expenseCategoryQuery,
              (expeneSnapshot) => {
                const fetchedExpenseCategories: Category[] = [];
                expeneSnapshot.forEach((expenseDoc) => {
                  const expenseData = expenseDoc.data();
        
                  fetchedExpenseCategories.push({
                    id: expenseDoc.id,
                    name: expenseData.name,
                    description: expenseData.description,
                    spentAmount: expenseData.spentAmount,
                    budgetLimit: expenseData.budgetLimit,
                  });
                });
                const sorted = sortCategory(fetchedExpenseCategories);
                setExpensCategories(sorted);
                }
              );
        
            const incomeCategoryListner = onSnapshot(
              incomeCategoryQuery,
              (incomeSnapshot) => {
                const fetchedIncomeCategories: Category[] = [];
                incomeSnapshot.forEach((incomeDoc) => {
                  const incomeData = incomeDoc.data();
                  fetchedIncomeCategories.push({
                    id: incomeDoc.id,
                    name: incomeData.name,
                    description: incomeData.description,
                    spentAmount: incomeData.spentAmount,
                    budgetLimit: incomeData.budgetLimit,
                  });
                });
                const sorted = sortCategory(fetchedIncomeCategories);
                setIncomeCategories(sorted)
              }
            );
            
            return () => {
              expenseCategoryListner();
              incomeCategoryListner();
            }
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
       
      }, []);

      return {incomeCategories,expenseCategories};
}