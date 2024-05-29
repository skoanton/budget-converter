import { Category } from "@/types/categories";
import { apiRequest } from "../api";

export const addDescriptionToCategory = async (descriptionID: number,category: Category) => {

    try {
       
       const updateData = {category_ID: category.id,description_ID: descriptionID};
        await apiRequest(`/categories/description`,"POST",updateData);
        console.log(`Category with ID ${category.id} updated with description ID ${descriptionID}`);
       
      } catch (error) {
        console.error('Error updating categories:', error);
      }

}