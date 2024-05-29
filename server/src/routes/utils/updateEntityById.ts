import { Request } from "express"
import { Response } from "express"
import { ModifyQuery } from "../../database/queryUtils";
import { ResultSetHeader } from "mysql2";
export async function updateEntityById<T>(tableName:string,req: Request<{ id: string }, any, any, any>,
    res: Response<any>,reqBody: Partial<T>){


      const id = req.params.id;
  const keys = Object.keys(reqBody);
  const values = Object.values(reqBody);

  if (keys.length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  // Create the update string with parameterized values
  const updateString = keys.map((key, index) => `${key} = ?`).join(', ');
  // Add the id as the last parameter
  const queryString = `UPDATE ${tableName} SET ${updateString} WHERE id = ?;`;

  console.log("Försöker uppdatera med ", queryString);

  try {
    // ModifyQuery should accept the query and the parameters array
    const result = await ModifyQuery(queryString, [...values, id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: `No entity with id ${id} found` });
    }
    
    res.json({ message: `Entity with id ${id} updated successfully` });
  } catch (error) {
    console.error(`Error updating entity with id ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
      
    
    }



    export async function Add<T>(
      values: Omit<T, "id">,
      tablename:string
    ): Promise<ResultSetHeader> {
      const keys = Object.keys(values);
      const columns = keys.join(', ');
      const placeholders = keys.map(() => '?').join(', ');
      const queryString = `INSERT INTO ${tablename} (${columns}) VALUES (${placeholders});`;
      const params = Object.values(values);
      return ModifyQuery(queryString, params);
    }

