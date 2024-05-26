import { DocumentReference, collection, getDocs, query, where } from "firebase/firestore";

import { Category } from "@/types/transactionsType";
import { db } from "../firebase";


export const getCategoryReferenceByName = async (name:string,collectionName:string): Promise<DocumentReference<Category> | null> => {

    try {
    
        const categoriesCollection = collection(db,collectionName);
        
        const q = query(categoriesCollection, where("name", "==", name));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.empty){
            console.log(`No category found with name ${name}`);
            return null;
        }

        const categoriesDoc = querySnapshot.docs[0];
        return categoriesDoc.ref as DocumentReference<Category>;


    } catch (error) {
        console.error("Could not fetch category by name:", error);
        return null;
    }


}