import { getCategories } from "@/lib/getCategories";
import { Category } from "@/types/transactions";
import { useEffect, useState } from "react";

export const useGetCategories = (): Category[] => {
    const [categories,setCategories]= useState<Category[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const fetchedCategories = await getCategories();
            if (fetchedCategories) {
              setCategories(fetchedCategories);
            } else {
              console.log("Could not get cateogires");
            }
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
        
        fetchCategories();
      }, []);

      return categories;
}