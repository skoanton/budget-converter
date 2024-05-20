
const { db } = require('@/lib/firebase');
import { Category } from "@/types/transactions";
const { doc, getDoc, updateDoc } = require('firebase/firestore');


export const addDescriptionToCategory = async (description: string,category: Category) => {

    try {
        const categoryDocRef = doc(db, 'categories', category.id);
        const categoryDocSnap = await getDoc(categoryDocRef);
  
        if (categoryDocSnap.exists()) {
          const currentDescription: string = categoryDocSnap.data().description || '';
          const updatedDescription = currentDescription
            ? `${currentDescription},${description}`
            : description;
  
          await updateDoc(categoryDocRef, {
            description: updatedDescription,
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error updating document: ', error);
      }

}