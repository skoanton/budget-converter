import { apiRequest } from "./api";

export async function getEntites<T> (endPoint:string): Promise<T[] | null> {

    try {
        const entites:T[] = await apiRequest(endPoint); 

        if(entites.length> 0){
            return entites;
        }
        else{
            console.error(`Could not find entites on ${endPoint}`);
            return null;
        }

    } catch (error) {
        console.error(`Could not fetch entites on ${endPoint}. Error: ${error}`);
        return null;
    }


}