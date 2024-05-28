import axios from "axios";

import { Description } from "@/types/descriptions";
import { apiRequest } from "../api";

export async function getDescriptions(): Promise<Description[] | null>{

    try {
        const data:Description[] = await apiRequest("/descriptions");
        return data;
    } catch (error) {
        console.log("could not fetch from api", error);
        return null;
    }

}