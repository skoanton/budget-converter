import { apiRequest } from "../api"

export async function CreateDescription(description:string){
    const newDescription = {
        name: description
    }
    await apiRequest("/descriptions","POST",newDescription);
}