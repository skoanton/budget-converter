import { COLLECTION_NAMES } from "@/constants/collectionsNames"
import { collection, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase";

export const deleteAllCategories = async () => {

    try {

        const expensesCollection = await getDocs(collection(db,COLLECTION_NAMES.EXPENSES_CATEGORIES));
        const incomesCollection = await getDocs(collection(db,COLLECTION_NAMES.INCOME_CATEGORIES));

        const deletePromises: Promise<void>[]= [];

        expensesCollection.forEach((doc) => {
            deletePromises.push(deleteDoc(doc.ref));
        })

        incomesCollection.forEach((doc) => {
            deletePromises.push(deleteDoc(doc.ref));
        })

        await Promise.all(deletePromises);
        console.log('All categories have been deleted successfully.');

    } catch (error) {
        console.error('Error deleting categories: ', error);
    }


}