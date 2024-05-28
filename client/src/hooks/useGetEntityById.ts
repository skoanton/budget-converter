import { getEntitiyById } from "@/lib/getEntityById";
import { useEffect, useState } from "react";

export const useGetEntityById = <T> (entityID:number,endPoint:string) => {

    const [entity, setEntity] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        const fetchEntity = async () => {
            setLoading(true);
            const fetchedIntity = await getEntitiyById<T>(entityID,`${endPoint}`);
            setEntity(fetchedIntity)
            setLoading(false);
        }
        fetchEntity();
    },[entityID]);

    return {entity,loading};
}