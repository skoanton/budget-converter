import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { string } from "zod";
import axios from "axios";

interface CategoryType  {  
     name: string;
     id: number;     
}

export const createCategory = async (categoryType:CategoryType,categories:string,budgetLimitSet:number) => {
    
    
    const categoryToAdd = {
        name: categories,
        spent: 0,
        budget: budgetLimitSet,
        category_type_ID : categoryType.id,
        description_ID : null
    }

    try {
        
        await axios.post("http://localhost:8801/api/categories", categoryToAdd)

        //TODO: fixa så man kan lägga till flera kategorier samtidgt  
        
        console.log("Added all categories to the database");

    } catch (error) {
        console.error("Could not create category:",error);
    }

}