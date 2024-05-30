import { Response } from "express";
import { Request } from "express";
import { getAllEntities } from "../utils/getAllEntities";
import { getExpenses } from "../utils/getExpenses";


export async function getExpensesByMonth<T>(reqBody:Partial<T>,res:Response<any>){

    try {
        const results = await getExpenses<T>(reqBody);

        if(!results){
            return res.status(404).json, ({error: `Could not calculate entities from this date`});
        }

       res.json(results);
    } catch (error) {
        return res.status(500).json, ({error: "Internal server error"});
    }

}