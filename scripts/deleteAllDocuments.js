const {db} = require("../src/lib/firebase");
const { collection, getDocs, deleteDoc, doc } = require("firebase/firestore");

async function deleteAllDocuments(collectionName) {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);

  try {
    for (const documentSnapshot of querySnapshot.docs) {
      await deleteDoc(doc(db, collectionName, documentSnapshot.id));
    }
    console.log(`All documents in the ${collectionName} collection have been deleted.`);
  } catch (error) {
    console.error("Error deleting documents: ", error);
  }
}

deleteAllDocuments("income_categories").catch(console.error);
