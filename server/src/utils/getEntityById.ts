import { SelectQuery } from "../database/queryUtils";


export function getEntityById<T>(id: string,tablename:string) {
    const queryString = `SELECT * FROM ${tablename} WHERE id = ?;`;
    return SelectQuery<T>(queryString, [id]);
  }