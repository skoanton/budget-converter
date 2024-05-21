import { Category } from "@/types/transactionsType";
import { sortCategory } from "@/utils/sortCategory";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export const getCategories = async (collectionName:string): Promise<Category[] | undefined> => {
    console.log("försöker hämta databas med", collectionName);
    try {
        const queryCollection = await getDocs(collection (db,collectionName));
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