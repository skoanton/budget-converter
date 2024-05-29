
import { Response } from "express";
import { Request } from "express";
import { getEntityById } from "../utils/getEntityById";


export async function getPostById<T>(
  tablename:string,
  req: Request<{ id: string }, any, any, any>,
  res: Response<any>,
) {

  const id = req.params.id;
  
  try {
    const foundEntity = await getEntityById<T>(id,tablename);
    if (!foundEntity) {
      return res.status(404).json, { error: `No entitiy with ${id} found` };
    }
    res.json(foundEntity);
  } catch (error) {
    return res.status(500).json, { error: "Internal server error" };
  }
}
