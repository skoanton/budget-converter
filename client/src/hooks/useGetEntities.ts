import { getEntites } from "@/lib/getEntites";
import { useEffect, useState } from "react"

export function useGetEntities<T>(endPoint:string){
    const [entities, setEntities] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
        const fetchEntities = async () => {

            try {
                setLoading(true);
                const fetchedEntities = await getEntites<T>(endPoint);

                if(fetchedEntities){
                    setEntities(fetchedEntities);
                }
                else{
                    setError(`No entities found at ${endPoint}`);
                }


            } catch (error) {
                setError("Error fetching entities");
                console.error("Error fetching entities:", error);
            }

            finally{
                setLoading(false);
            }


        }
        fetchEntities();
    },[endPoint])
    
    return {entities,loading,error};

}