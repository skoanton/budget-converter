import { Response } from "express";
import { Request } from "express";
import { SelectQuery } from "../../database/queryUtils";
export async function getCategoriesByType<T>(
  tablename:string,
  category_type_ID: number,
  res: Response<any>
) {
  try {
    const foundEntity = await GetById<T>(category_type_ID,tablename);
    if (!foundEntity) {
      return res.status(404).json, { error: `No entitiy with ${category_type_ID} found` };
    }
    res.json(foundEntity);
  } catch (error) {
    return res.status(500).json, { error: "Internal server error" };
  }
}

export function GetById<T>(category_type_ID: number,tablename:string) {
  const queryString = `SELECT * FROM ${tablename} WHERE category_type_ID = ?;`;
  return SelectQuery<T>(queryString, [category_type_ID]);
}
