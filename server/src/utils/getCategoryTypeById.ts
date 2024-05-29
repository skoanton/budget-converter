import { SelectQuery } from "../database/queryUtils";


export function getCategoryTypeById<T>(id: number,tablename:string) {
    const queryString = `SELECT * FROM ${tablename} WHERE category_type_ID = ?;`;
    return SelectQuery<T>(queryString, [id]);
  }