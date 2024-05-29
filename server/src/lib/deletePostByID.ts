import { Request } from "express";
import { Response } from "express";
import { deleteEntityById } from "../utils/deleteEntityById";

export async function deletePostByID(
    tableName:string,
    req: Request<{ id: string }, any, any, any>,
    res: Response<any>,
    
){

    const id = req.params.id;
    console.log("ID:",id);
    try {
        const data = await deleteEntityById(id,tableName);
        if (!data) {
            return res.status(404).json, { error: `No entitiy with ${id} found` };
          }
        res.json(data);
    } catch (error) {
        return res.status(500).json, { error: "Internal server error" };
    }
}

