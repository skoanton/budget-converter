import axios, { Method } from "axios";

export async function apiRequest(endPoint:string,method:Method = "GET",data?:any) {

    const BASE_URL = "http://localhost:8801/api";
    const url = `${BASE_URL}${endPoint}`;

    const options = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
          },
          data
    }

    try {
        const response = await axios(options);

        return response.data;    

    } catch (error) {
        console.error('API error:', error);
        throw error;
    }

}