import { ModifyQuery } from "../database/queryUtils"

export async function deleteEntityById (id:string,tableName:string){
    const queryString = `DELETE FROM ${tableName} WHERE ID = ?;`
    return ModifyQuery(queryString,[id]);
}