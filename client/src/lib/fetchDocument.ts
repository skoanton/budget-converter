import { DocumentReference, getDoc } from "firebase/firestore";

export const fetchDocument = async <T>(docRef: DocumentReference<T> | undefined): Promise<{ data: T | null, error: string | null }> => {
    
    if(!docRef){
        return {data:null, error: "Document reference is undefined"};
    }

    try {

        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            
            return {data: docSnap.data() as T, error: null};
           
        }
        else{
            return {data: null, error: "Document not found"};
        }


    } catch (err) {
        return {data: null, error: `Failed to fetch document: ${err}`};
    }


}