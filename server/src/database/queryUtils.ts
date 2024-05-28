
import { ResultSetHeader } from "mysql2";
import pool from "./connection";

export async function SelectQuery<T>(
  queryString: string, params?:any[]
): Promise<Partial<T[]>> {
  try {
    const [results] = await pool.execute(queryString, params );
  return results as T[];
  } catch (error) {
    console.error("Query Error:", error);
    throw error;
  }
  
}

export async function ModifyQuery(
  queryString: string, params?:any[]
): Promise<ResultSetHeader> {
  console.log(queryString,[params]);
  try {
    const [results] = await pool.execute(queryString, params);
    return results as ResultSetHeader;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}
