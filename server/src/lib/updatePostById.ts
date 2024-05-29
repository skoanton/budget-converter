import { Request } from "express"
import { Response } from "express"
import { updateEntity } from "../utils/updateEntity";


export async function updatePostById<T>(tableName:string,req: Request<{ id: string }, any, any, any>,
    res: Response<any>,reqBody: Partial<T>){
      const id = req.params.id;
      try {
          const data = await updateEntity(reqBody,tableName,id);
          res.json(data);
      } catch (error) {
        console.error(`Error updating entity with id ${id}:`, error);
      }
    }

