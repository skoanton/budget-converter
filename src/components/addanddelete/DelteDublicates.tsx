import { useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "@/lib/firebase"; // Adjust the import based on your actual path
import { Category } from "@/types/transactions";

export default function DeleteDuplicateCategories() {
  useEffect(() => {
    const deleteDuplicateCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const categoriesSnapshot = await getDocs(categoriesCollection);

        const categories: Category[] = categoriesSnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Category)
        );

        const categoryCount: { [key: string]: string[] } = {};

        // Count occurrences of each category name
        categories.forEach((category) => {
          if (categoryCount[category.name]) {
            categoryCount[category.name].push(category.id);
          } else {
            categoryCount[category.name] = [category.id];
          }
        });

        // Identify duplicate categories (i.e., names with more than one occurrence)
        const duplicates = Object.keys(categoryCount).filter(
          (name) => categoryCount[name].length > 1
        );

        const deletePromises: Promise<void>[] = [];

        // For each duplicate category, keep one and delete the rest
        duplicates.forEach((name) => {
          const ids = categoryCount[name];
          // Keep the first occurrence, delete the rest
          for (let i = 1; i < ids.length; i++) {
            deletePromises.push(deleteDoc(doc(db, "categories", ids[i])));
          }
        });

        await Promise.all(deletePromises);
        console.log("Duplicate categories have been deleted.");
      } catch (e) {
        console.error("Error deleting duplicate categories: ", e);
      }
    };

    deleteDuplicateCategories();
  }, []);

  return <div>Deleting duplicate categories from Firestore...</div>;
}
