import { ResultSetHeader } from "mysql2";
import { ModifyQuery } from "../database/queryUtils";

export async function updateEntity<T>(
    reqBody: Partial<T>,
    tableName:string,
    id:string
  ): Promise<ResultSetHeader> {
    const keys = Object.keys(reqBody);
    const values = Object.values(reqBody);

     const updateString = keys.map((key, index) => `${key} = ?`).join(', ');
    const queryString = `UPDATE ${tableName} SET ${updateString} WHERE id = ?;`;
    return ModifyQuery(queryString, [...values, id]);
  }