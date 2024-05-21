import { fetchDocument } from "@/lib/fetchDocument";
import { Category } from "@/types/transactionsType";

import { DocumentReference } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetCategoryRef = (categoryRef: DocumentReference<Category> | undefined) => {

    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      
        const fetchAccount = async () => {
            setLoading(true);
            const {data,error} = await fetchDocument<Category>(categoryRef);
            setCategory(data);
            setError(error);
            setLoading(false);
        }
        fetchAccount();
    },[categoryRef]);

    return {category,loading,error};
}