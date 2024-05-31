import { Category } from "@/types/categories";
import { apiRequest } from "../api";

export async function getMonthlyExpense (category:Category,dates:Date[]): Promise<{ total_amount: number } | null> {
    const startDate = dates[0];
    const endDate = dates[dates.length -1];
    console.log("StartDate:",startDate);
    console.log("EndDate:",endDate);

    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }

    const dataToSend = {
        category_ID : category.id,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
    }

    console.log("StartDate:",dataToSend.startDate);
    console.log("EndDate:",dataToSend.endDate);
    try {
        const results: {total_amount:number} = await apiRequest("/expenses/total","POST",dataToSend)
        if(!results){
            return null
        }
        return results;
        
    } catch (error) {
        console.error("Could not get total expense on",dataToSend,error);
        return null
    }

}