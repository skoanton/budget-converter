import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const createCategory = async (collectionName:string,categories:string[]) => {
    try {
        const categoriesCollection = collection(db,collectionName);


        for( const category of categories){
            await addDoc(categoriesCollection, {
                description: "",
                name: category,
                spentAmount: 0,
                budgetLimit:  0,
            })
        }
        
        console.log("Added all categories to the database");

    } catch (error) {
        console.error("Could not create category:",error);
    }

}