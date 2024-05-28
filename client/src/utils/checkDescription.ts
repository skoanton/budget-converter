
import { getCategories } from "@/lib/categories/getCategories";
import { CreateDescription } from "@/lib/descriptions/createDescription";
import { getDescriptions } from "@/lib/descriptions/getDescriptions";

export const checkDescription = async (transactionDescription:string): Promise<number | null> => {
    const categories = await getCategories();
    const descriptions = await getDescriptions();

    if(descriptions){
     let descriptionID = descriptions.find((description) => description.name === transactionDescription )?.id;
     if(!descriptionID){
        await CreateDescription(transactionDescription);
        const updatedDescriptions = await getDescriptions();
        descriptionID = updatedDescriptions?.find(description => description.name === transactionDescription)?.id;
     }

     if(descriptionID){
      const categoryId = categories.find((category) => category.description_ID === descriptionID)?.id;
      return categoryId ?? 1;
     }
     
    }
    return null;

}