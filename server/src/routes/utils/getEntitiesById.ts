
import { Response } from "express";
import { Request } from "express";
import { SelectQuery } from "../../database/queryUtils";
export async function getEntitiesById<T>(
  tablename:string,
  req: Request<{ id: string }, any, any, any>,
  res: Response<any>
) {

  const id = req.params.id;
  
  try {
    const foundEntity = await GetById<T>(id,tablename);
    if (!foundEntity) {
      return res.status(404).json, { error: `No entitiy with ${id} found` };
    }
    res.json(foundEntity);
  } catch (error) {
    return res.status(500).json, { error: "Internal server error" };
  }
}

export function GetById<T>(id: string,tablename:string) {
  const queryString = `SELECT * FROM ${tablename} WHERE id = ?;`;
  return SelectQuery<T>(queryString, [id]);
}
