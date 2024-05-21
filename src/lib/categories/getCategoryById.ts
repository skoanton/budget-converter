import { DocumentReference, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Category } from "@/types/transactionsType";


export const getCategoryById = async (categoryId:string,collectionName:string):Promise<Category | null> => {
    console.log("Categoryid:",categoryId);
    try {

        const categoryRef = doc(db,collectionName, categoryId);
        const categorySnapshot = await getDoc(categoryRef);

        if(categorySnapshot.exists()){
            console.log(`Category found`);
            const categoryData = categorySnapshot.data();
            const categoryToReturn: Category = {
                id: categorySnapshot.id,
                name: categoryData.name,
                description: categoryData.description
            }

            return categoryToReturn
        }

        else {
            console.log("Category not found");
            return null;
        }


    } catch (error) {
        console.error("Could not fetch category by name:", error);
        return null;
    }



}