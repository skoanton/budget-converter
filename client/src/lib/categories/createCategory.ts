import axios from "axios";
import { Category } from "@/types/categories";

interface CategoryType  {  
     name: string;
     id: number;     
}

export const createCategory = async (categoryType:CategoryType,categories:string,budgetLimitSet:number) => {
    
    const categoryToAdd : Category = {
        name: categories,
        spent: 0,
        budget: budgetLimitSet,
        category_type_ID : categoryType.id,
        description_ID : null
    }

    try {
        console.log(categoryToAdd);
        await axios.post("http://localhost:8801/api/categories", categoryToAdd)

        //TODO: fixa så man kan lägga till flera kategorier samtidgt  
        
        console.log("Added categories to the database");

    } catch (error) {
        console.error("Could not create category:",error);
    }

}