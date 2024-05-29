import { Response } from "express";

import { getCategoryTypeById } from "../utils/getCategoryTypeById";


export async function getCategoriesByType<T>(
  tablename:string,
  category_type_ID: number,
  res: Response<any>
) {
  try {
    const foundEntity = await getCategoryTypeById<T>(category_type_ID,tablename);
    if (!foundEntity) {
      return res.status(404).json, { error: `No entitiy with ${category_type_ID} found` };
    }
    res.json(foundEntity);
  } catch (error) {
    return res.status(500).json, { error: "Internal server error" };
  }
}


