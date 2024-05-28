import { Request } from "express"
import { Response } from "express"
import { ModifyQuery } from "../../database/queryUtils";
export async function updateEntityById<T>(tableName:string,req: Request<{ id: string }, any, any, any>,
    res: Response<any>,reqBody: Partial<T>){

    const id = req.params.id;
    const queryString = `UPDATE ${tableName} SET ? WHERE id = ${id} `
    try {
        const result = await ModifyQuery(queryString, [reqBody, id]);
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: `No entity with id ${id} found` });
        }
        res.json({ message: `Entity with id ${id} updated successfully` });
      } catch (error) {
        console.error(`Error updating entity with id ${id}:`, error);
        res.status(500).json({ error: "Internal server error" });
      }
    }

