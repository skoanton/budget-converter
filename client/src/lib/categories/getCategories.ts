import { Category } from "@/types/categories";
import { apiRequest } from "../api";

export async function getCategories ():Promise<Category[]>{
    try {
        const data: Category[] = await apiRequest("/categories");
        return data;
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
}