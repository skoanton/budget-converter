import { Category } from "@/types/transactions";

const { db } = require('@/lib/firebase');
import { sortCategory } from "@/utils/sortCategory";
const { collection, getDocs } = require('firebase/firestore');

export const getCategories = async (typeOfCategory:string): Promise<Category[] | undefined> => {
    console.log("försöker hämta databas med", typeOfCategory);
    try {
        const queryCollection = await getDocs(collection (db,typeOfCategory));
        const categoriesData = queryCollection.docs.map ((category:any) => ({
            id: category.id,
            ...category.data(),
        })) as Category[]
        const sortedCategories = sortCategory(categoriesData);
       return sortedCategories;
    } catch (error) {
        console.error ("Error fetching categories: ", error);
    }
}