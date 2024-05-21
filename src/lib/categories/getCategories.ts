import { Category } from "@/types/transactionsType";
import { sortCategory } from "@/utils/sortCategory";
import { getDocs, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";

export const getCategories = async (): Promise<{expenseCategories: Category[] | null, incomeCategories:Category[] | null} > => {
   
    try {
        const expenseCategoriesSnapshot = await getDocs(collection(db,COLLECTION_NAMES.EXPENSES_CATEGORIES));
        const incomeCategoriesSnapshot = await getDocs(collection(db,COLLECTION_NAMES.INCOME_CATEGORIES));

        if(expenseCategoriesSnapshot.empty || incomeCategoriesSnapshot.empty){
            console.log("could not find categories");
            return {
                expenseCategories: null,
                incomeCategories: null,
            }
        }

        const expenseCategories : Category[] = expenseCategoriesSnapshot.docs.map((expenseCategory) => {
            const expenseData = expenseCategory.data();
            return {
                id: expenseCategory.id,
                name: expenseData.name,
                description: expenseData.description,
                spentAmount: expenseData.spentAmount,
                budgetLimit: expenseData.budgetLimit
            }

        })

        const incomeCategories : Category [] = incomeCategoriesSnapshot.docs.map((incomeCategory) => {
            const incomeData = incomeCategory.data();

            return {
                id: incomeCategory.id,
                name: incomeData.name,
                description: incomeData.description,
                spentAmount: incomeData.spentAmount,
                budgetLimit: incomeData.budgetLimit
            }
        })


        return {
            expenseCategories: expenseCategories,
            incomeCategories: incomeCategories,
        }

    } catch (error) {
        console.error ("Error fetching categories: ", error);
     
            return {
                expenseCategories: null,
                incomeCategories: null,
            }
        }
}
