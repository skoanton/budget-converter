import { CategoryDescription } from "@/types/categories";
import { apiRequest } from "../api";
import { getEntites } from "../getEntites";

export const addDescriptionToCategory = async (descriptionID: number,categoryID: number) => {

  const updateData = {category_ID: categoryID,description_ID: descriptionID};
    try {
        const categories_descriptions = await getEntites<CategoryDescription>("/categories/descriptions");
        
        const categoriesDescriptionexsists = categories_descriptions?.some((catDesc) => 
          catDesc.category_ID === categoryID && catDesc.description_ID === descriptionID
        )
        if(!categoriesDescriptionexsists){
          await apiRequest(`/categories/descriptions`,"POST",updateData);
          console.log(`Category with ID ${categoryID} updated with description ID ${descriptionID}`);
        }
        
       
      } catch (error) {
        console.error('Error updating categories:', error);
      }

}