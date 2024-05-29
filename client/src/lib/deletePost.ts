import { apiRequest } from "./api";

export async function deletePost(id:string,endPoint:string) {

    const url = `${endPoint}/id/${id}`;
    console.log("url:",url);
    console.log("inside delete");
    try {
        const data = await apiRequest(url,"DELETE");
        console.log("Deleted",data);
    } catch (error) {
        console.error ("Could not delete with:",url,error);
    }
}