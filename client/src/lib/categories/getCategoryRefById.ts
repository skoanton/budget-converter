import { DocumentReference, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Category } from "@/types/transactionsType";


export const getCategoryRefById = async (categoryId:string,collectionName:string):Promise<DocumentReference<Category> | null> => {
    console.log("Categoryid:",categoryId);
    try {

        const categoryRef = doc(db,collectionName, categoryId);
        const categorySnapshot = await getDoc(categoryRef);

        if(categorySnapshot.exists()){
            console.log(`Category found`);
            return categoryRef as DocumentReference<Category>;
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