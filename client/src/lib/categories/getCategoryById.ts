import { apiRequest } from "../api";
import { Category } from "@/types/categories";


export const getCategoryById = async (id:number):Promise<Category | null> => {
    try {


        const category: Category[] = await apiRequest(`/categories/id/${id}`);

        if(category.length > 0){
            return category[0];
        }
        else{
            console.error(`Could not find category with id: ${id}`);
            return null;
        }
        }     

     catch (error) {
        console.error("Could not fetch category by name:", error);
        return null;
    }

}