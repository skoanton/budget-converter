import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const deleteCategory = async (collectionName:string,categoryId:string) => {


    try {

            await deleteDoc(doc(db,collectionName,categoryId));
            console.log("deleted category");
        
    } catch (error) {

        console.error("Error deleteing",error);
        
    }


}