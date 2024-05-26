import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { string } from "zod";

export const createCategory = async (collectionName:string,categories:string[] | string,budgetLimitSet:number) => {
    try {
        const categoriesCollection = collection(db,collectionName);

        //TODO: fixa så man kan lägga till flera kategorier samtidgt

        if(Array.isArray(categories)){
            for( const category of categories){
                await addDoc(categoriesCollection, {
                    description: "",
                    name: category,
                    spentAmount: 0,
                    budgetLimit:  budgetLimitSet,
                })
            }
        }
        else{
            await addDoc(categoriesCollection, {
                description: "",
                name: categories,
                spentAmount: 0,
                budgetLimit:  budgetLimitSet,
            })
        }

       
        
        console.log("Added all categories to the database");

    } catch (error) {
        console.error("Could not create category:",error);
    }

}