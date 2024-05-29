import { Request } from "express";
import { Response } from "express";
import { ResultSetHeader } from "mysql2";
import { ModifyQuery } from "../../database/queryUtils";
import { object } from "zod";
export async function handlePostRequest<T>(
  tablename: string,
  reqBody: Omit<T,"id">,
  res: Response<any>
) {
  try {
    const data = await Add(reqBody,tablename);
    if (!data) {
      return res.status(404).json({ error: "Data is empty" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error:", error); 
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


