import { Category } from "@/types/categories";
import {create} from "zustand";

interface CategoryState {
    allCategories: Category [],
    incomeCategories: Category[],
    expenseCategories: Category[],
    savingsCategories: Category[],
    addCategory: (category:Category) => void,
    setCategories: (categories: Category[]) => void,
    deleteCategory: (category:Category) => void,
    clearCategories: () => void
}

export const useCategoryStore = create<CategoryState>()((set) => ({
    allCategories: [],
    incomeCategories: [],
    expenseCategories: [],
    savingsCategories: [],
    addCategory: (category) =>
        set((state) => {
            const updatedIncomeCategories = category.category_type_ID === 1
            ? [...state.incomeCategories,category]
            : state.incomeCategories;

            const updatedExpenseCategories = category.category_type_ID === 2
            ? [...state.expenseCategories,category]
            : state.expenseCategories;


            const updatedSavingsCategories = category.category_type_ID === 3
            ? [...state.savingsCategories,category]
            : state.savingsCategories;

            return {
                allCategories: [...state.allCategories,category],
                incomeCategories: updatedIncomeCategories,
                expenseCategories: updatedExpenseCategories,
                savingsCategories: updatedSavingsCategories
            };
        }),
        setCategories: (categories) =>
            set((state) => {
              const incomeCategories:Category[] = [];
              const expenseCategories:Category[] = [];
              const savingsCategories:Category[] = [];
              categories.forEach((category) => {
                switch (category.category_type_ID) {
                  case 1:
                    incomeCategories.push(category);
                    break;
                  case 2:
                    expenseCategories.push(category);
                    break;
                  case 3:
                    savingsCategories.push(category);
                    break;
                  default:
                    break;
                }
              });
              return {
                allCategories: categories,
                incomeCategories,
                expenseCategories,
                savingsCategories,
              };
            }),
            deleteCategory: (category) =>
              set((state) => {
                const filteredAllCategories = state.allCategories.filter((cat) => cat.id !== category.id);
          
                let filteredIncomeCategories = state.incomeCategories;
                let filteredExpenseCategories = state.expenseCategories;
                let filteredSavingsCategories = state.savingsCategories;
          
                switch (category.category_type_ID) {
                  case 1:
                    filteredIncomeCategories = state.incomeCategories.filter((cat) => cat.id !== category.id);
                    break;
                  case 2:
                    filteredExpenseCategories = state.expenseCategories.filter((cat) => cat.id !== category.id);
                    break;
                  case 3:
                    filteredSavingsCategories = state.savingsCategories.filter((cat) => cat.id !== category.id);
                    break;
                  default:
                    break;
                }
          
                return {
                  allCategories: filteredAllCategories,
                  incomeCategories: filteredIncomeCategories,
                  expenseCategories: filteredExpenseCategories,
                  savingsCategories: filteredSavingsCategories,
                };
              }),
        clearCategories: () => set({
            allCategories: [],
            incomeCategories: [],
            expenseCategories: [],
            savingsCategories: [],
        })
}))
