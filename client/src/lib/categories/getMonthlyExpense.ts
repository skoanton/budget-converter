import { Category } from "@/types/categories";
import { apiRequest } from "../api";

export async function getMonthlyExpense (category:Category,dates:Date[]): Promise<{ total_amount: number } | null> {
    const startDate = dates[0];
    const endDate = dates[dates.length - 1];
    const dataToSend = {
        category_ID : category.id,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0], 
    }

    try {
        const results: {total_amount:number} = await apiRequest("/expense/total","POST",dataToSend)
        if(!results){
            return null
        }
        return results;
        
    } catch (error) {
        console.error("Could not get total expense on",dataToSend,error);
        return null
    }

}