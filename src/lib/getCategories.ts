import { Category } from "@/types/transactions";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";
import { sortCategory } from "@/utils/sortCategory";

export const getCategories = async (): Promise<Category[] | undefined> => {
    try {
        const queryCollection = await getDocs(collection (db,"categories"));
        const categoriesData = queryCollection.docs.map ((category) => ({
            id: category.id,
            ...category.data(),
        })) as Category[]
        const sortedCategories = sortCategory(categoriesData);
       return sortedCategories;
    } catch (error) {
        console.error ("Error fetching categories: ", error);
    }
}