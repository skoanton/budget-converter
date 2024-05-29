import { ResultSetHeader } from "mysql2";
import { ModifyQuery } from "../database/queryUtils";


export async function addEntity<T>(
    values: Omit<T, "id">,
    tablename:string
  ): Promise<ResultSetHeader> {
    const keys = Object.keys(values);
    const columns = keys.join(', ');
    const placeholders = keys.map(() => '?').join(', ');
    const queryString = `INSERT INTO ${tablename} (${columns}) VALUES (${placeholders});`;
    const params = Object.values(values);
    return ModifyQuery(queryString, params);
  }