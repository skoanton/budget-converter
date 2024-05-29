import { SelectQuery } from "../database/queryUtils";


export function getAllEntities<T>(tableName:string) {
    const queryString = `SELECT * FROM ${tableName};`
    return SelectQuery<T>(queryString);
}

