const db = require("../src/lib/firebase");
const { addDoc, collection } = require("firebase/firestore");


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


async function createExpenseCategories(){
    const expensesCategoriesCollection = collection(db,"expenses_categories");

    try {

        for( const category of categories){
            await addDoc(expensesCategoriesCollection, {
                description: "",
                name: category
            })
        }
        
        console.log("Added all categories to the database");

    } catch (error) {
        console.error("Could not add everything:",error);
    }
}
createExpenseCategories().catch(console.error);