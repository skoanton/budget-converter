import { Category } from "@/types/transactionsType";


export const checkDescription = (categories: Category[],description:string): Category  |undefined => {
  

    return categories.find((category) => {
        const trimmedCategoryDescription = category.description.split(`,`).map(desc => desc.trim());
      
        return trimmedCategoryDescription.includes(description);
      });
}