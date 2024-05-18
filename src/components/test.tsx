import db from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function test() {
  useEffect(() => {
    const addUser = async () => {
      try {
        const docRef = await addDoc(collection(db, "categories"), {
          name: "Food",
          description: "Foodora AB,Max app",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    addUser();
  }, []);

  return <></>;
}
