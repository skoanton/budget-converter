const { db } = require('@/lib/firebase');
const { doc, getDoc, updateDoc } = require('firebase/firestore');

import { Category } from "@/types/categories";
import { useCallback, useEffect } from "react";

export const useAddDescriptionToCategory = () => {
    const addDescriptionToCategory = useCallback(async (description: string, category: Category) => {
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
    }, []);
    return addDescriptionToCategory;
  };