import { apiRequest } from "./api";

export async function getEntitiyById<T>(id:number,endPoint:string):Promise<T | null>{

    try {
        const entity: T[] = await apiRequest(`${endPoint}/id/${id}`);

    if(entity.length > 0){
        return entity[0];
    }
    else{
        console.error(`Could not find entity with id: ${id}`);
        return null;
    }    
    } catch (error) {
        console.error("Could not fetch entity by id:", error);
        return null;
    }



}  

       

