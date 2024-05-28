import { Description } from "@/types/descriptions";
import { apiRequest } from "../api";

export async function getDescriptionIdByName(name:string): Promise<number>{


  const formattedName = encodeURIComponent(name);
    try {
      const data: Description[] = await apiRequest(`/descriptions/name/${formattedName}`);
      if (data.length > 0 && data[0].id !== undefined) {
        return data[0].id;
        } else {
          throw new Error(`Description not found for name: ${name}`);
        }
      } catch (error) {
        console.error(`Error fetching description by name (${name}):`, error);
        throw new Error(`Description not found for name: ${name}`);
      }
    }