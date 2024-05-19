import db from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function AddCategoriesToDatabase() {
  useEffect(() => {
    const categories = [
      "Försäkringar",
      "Hyra",
      "Lån",
      "Bensin",
      "Bil",
      "El",
      "Internet",
      "Mat",
      "Sjukhus",
      "Telefoni",
      "Bank",
      "Alkohol",
      "Casino/Betting",
      "Elektronik",
      "Event",
      "Hälsa",
      "Kläder",
      "Presenter",
      "Shopping",
      "Spel/Böcker",
      "Streaming/Tjänster",
      "Swish",
      "Tobak",
      "Transport",
      "Träning",
      "Äta ute",
      "Övrigt",
    ];

    const addCategories = async () => {
      try {
        // Fetch existing categories
        const existingCategoriesSnapshot = await getDocs(
          collection(db, "categories")
        );
        const existingCategories = existingCategoriesSnapshot.docs.map(
          (doc) => doc.data().name
        );

        for (const category of categories) {
          if (!existingCategories.includes(category)) {
            const docRef = await addDoc(collection(db, "categories"), {
              name: category,
              description: "",
            });
            console.log("Document written with ID: ", docRef.id);
          } else {
            console.log(`Category "${category}" already exists.`);
          }
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    addCategories();
  }, []); // Empty dependency array ensures this runs once on mount

  return <div>Adding categories to Firestore...</div>;
}
