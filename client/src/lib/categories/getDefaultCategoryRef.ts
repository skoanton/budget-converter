import { Category } from "@/types/transactionsType";
import { DocumentReference, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getDefaultCategoryReference(collectionName:string): Promise<DocumentReference<Category>> {
    const defaultCategoryRef = doc(collection(db, collectionName), `default_${collectionName}`);
    try {
        const docSnap = await getDoc(defaultCategoryRef);
        if (!docSnap.exists()) {
            await setDoc(defaultCategoryRef, {
                name: "Uncategorized",
                description: "Default category for uncategorized transactions",
                spentAmount: 0,
                budgetLimit:  0,
            });
        }
    } catch (error) {
        console.error("Error while retrieving or creating the default category:", error);
    }

    return defaultCategoryRef as DocumentReference<Category>;
}