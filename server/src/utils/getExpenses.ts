import { SelectQuery } from "../database/queryUtils"

export async function getExpenses<T>(values: Partial<T>): Promise<{ total_amount: number } | null> {
    const { category_ID, startDate, endDate } = values as any;

    const queryString = `SELECT SUM(amount) AS total_amount FROM transactions WHERE category_ID = ? AND date >= ? AND date <= ?;`
    const params = [category_ID, startDate, endDate];

    const results = await SelectQuery<{ total_amount: number }>(queryString, params);
    
    if (results.length > 0 && results[0]) {
        return results[0];
    } else {
        return null;
    }
}