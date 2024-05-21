const {db} = require("../src/lib/firebase");
const { addDoc, collection } = require("firebase/firestore");


const categories = [
    "Aktier",
    "Ersättning",
    "Extra",
    "Lön",
    "Skatteåterbäring",
    "CSN",
    "Egna konton"
  ];


async function createIncomeCategories(){
    const incomeCategoriesCollection = collection(db,"income_categories");

    try {

        for( const category of categories){
            await addDoc(incomeCategoriesCollection, {
                description: "",
                name: category
            })
        }
        
        console.log("Added all categories to the database");

    } catch (error) {
        console.error("Could not add everything:",error);
    }
}
createIncomeCategories().catch(console.error);