import { Category } from "@/types/transactionsType";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";


export const addDescriptionToCategory = async (description: string,category: Category,collectionName:string) => {
  console.log("Collection Name:", collectionName);
console.log("Category ID:", category.id);
console.log("Category:", category);
    try {
        const categoryDocRef = doc(db, collectionName, category.id);
        const categoryDocSnap = await getDoc(categoryDocRef);
  
        if (categoryDocSnap.exists()) {
          const categoryData = categoryDocSnap.data();
          const currentDescription: string = categoryData.description || '';
          console.log("Currendecsirption:", currentDescription);
          const updatedDescription = currentDescription
            ? `${currentDescription},${description}`
            : description;
  
          await updateDoc(categoryDocRef, {
            description: updatedDescription,
          });
          console.log(`Added "${description}" to category "${category.name}"`);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error updating document: ', error);
      }

}