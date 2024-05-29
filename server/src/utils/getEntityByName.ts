import { SelectQuery } from "../database/queryUtils";


export function getEntityByName<T>(name: string,tablename:string) {
    const queryString = `SELECT * FROM ${tablename} WHERE name = ?;`;
    return SelectQuery<T>(queryString, [name]);
  }