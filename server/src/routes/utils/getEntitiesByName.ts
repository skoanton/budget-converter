import { table } from "console";
import { SelectQuery } from "../../database/queryUtils";
import { Response } from "express";
import { Request } from "express";
export async function getEntitiesByName<T>(
  tablename:string,
  req: Request<{ name: string }, any, any, any>,
  res: Response<any>
) {
  const name = decodeURIComponent(req.params.name);
  try {
    const foundEntity = await GetByName<T>(name,tablename);
    if (!foundEntity) {
      return res.status(404).json, { error: `No entitiy with ${name} found`};
    }
    res.json(foundEntity);
  } catch (error) {
    console.error(`Error fetching entity by name (${name}):`, error);
    return res.status(500).json, { error: "Internal server error" };
  }
}

export function GetByName<T>(name: string,tablename:string) {
  const queryString = `SELECT * FROM ${tablename} WHERE name = ?;`;
  return SelectQuery<T>(queryString, [name]);
}
