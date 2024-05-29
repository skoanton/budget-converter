
import { Response } from "express";
import { getAllEntities } from "../utils/getAllEntities";


export async function getAllPosts<T>(tableName:string,res: Response<any>){

    try {
        const results = await getAllEntities<T>(tableName);

        if(!results){
            return res.status(404).json, ({error: `Could not find any entities from table ${tableName}`});
        }

       res.json(results);
    } catch (error) {
        return res.status(500).json, ({error: "Internal server error"});
    }

}

