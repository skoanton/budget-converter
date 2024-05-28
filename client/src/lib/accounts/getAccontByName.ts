import { Account } from "@/types/accounts";
import { apiRequest } from "../api";

export async function getAccountByName(name:string): Promise<Account | null> {

    const formattedName = encodeURIComponent(name.replace(/\s+/g, '-'));
    try {
        const data: Account[] = await apiRequest(`/accounts/name/${formattedName}`);
        if(data.length>0){
            return data[0];
        } else {
            console.log(`Account not found for name: ${name} will now create one`);
            return null;
          }
    } catch (error) {
        console.error(`Error fetching description by name (${name}):`, error);
        return null;
    }

}