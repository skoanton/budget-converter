import { Category } from "@/types/transactionsType";
import { DocumentReference, getDoc, updateDoc } from "firebase/firestore";



export const updateSpentAmountOnCategory = async (categoryToChange:DocumentReference<Category>,amount:number) => {

    try {

        const categorySnap = await getDoc(categoryToChange);

        if(!categorySnap.exists){
            console.log("could not find doc of category");
            throw new Error("Wrong");
        }
        
            const categoryData = categorySnap.data();
            if(categoryData){
                const updatedSpentAmount = categoryData.spentAmount + (amount);
                
                await updateDoc(categoryToChange, {
                    spentAmount: updatedSpentAmount

                })
                console.log("Changed balance");
            }

    } catch (error) {
        console.error("could not update category balance");
    }

}