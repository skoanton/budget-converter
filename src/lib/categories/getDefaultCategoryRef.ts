import { Category } from "@/types/transactionsType";
import { DocumentReference, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getDefaultCategoryReference(collectionName:string): Promise<DocumentReference<Category>> {
    const defaultCategoryRef = doc(collection(db, collectionName), "default");
    try {
        const docSnap = await getDoc(defaultCategoryRef);
        if (!docSnap.exists()) {
            await setDoc(defaultCategoryRef, {
                name: "Uncategorized",
                description: "Default category for uncategorized transactions"
            });
        }
    } catch (error) {
        console.error("Error while retrieving or creating the default category:", error);
    }

    return defaultCategoryRef as DocumentReference<Category>;
}