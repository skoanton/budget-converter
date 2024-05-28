
import { Response } from "express";
import { SelectQuery } from "../../database/queryUtils";
export async function getAllEntities<T>(tableName:string,res: Response<any>){

    try {
        const results = await GetAll<T>(tableName);

        if(!results){
            return res.status(404).json, ({error: `Could not find any entities from table ${tableName}`});
        }

       res.json(results);
    } catch (error) {
        return res.status(500).json, ({error: "Internal server error"});
    }

}

export function GetAll<T>(tableName:string) {
    const queryString = `SELECT * FROM ${tableName};`
    return SelectQuery<T>(queryString);
}