import { useEffect, useState } from "react";
import { useBreakOutTransactions } from "./useBreakeOutTransactions";
import { collection, doc, getDocs } from "firebase/firestore";
import db from "@/lib/firebase";
import { DocumentSnapshot } from "firebase-admin/firestore";
import { Category } from "@/types/transactions";

export const useFetchCategories = ():Category[] => {
    const [categories,setCategories] = useState<Category[]>([]);
    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const queryCollection = await getDocs(collection (db,"categories"));
                const categoriesData = queryCollection.docs.map ((category) => ({
                    id: category.id,
                    ...category.data(),
                })) as Category[] 
                setCategories(categoriesData);
            } catch (error) {
                console.error ("Error fetching categories: ", error);
            }
        }

        fetchCategories();

    },[])

    return categories


}