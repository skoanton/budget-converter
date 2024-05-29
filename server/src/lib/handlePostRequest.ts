import { Response } from "express";
import { addEntity } from "../utils/addEntity";


export async function handlePostRequest<T>(
  tablename: string,
  reqBody: Omit<T,"id">,
  res: Response<any>
) {
  try {
    const data = await addEntity(reqBody,tablename);
    if (!data) {
      return res.status(404).json({ error: "Data is empty" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error:", error); 
    res.status(500).json({ error: "Internal server error" });
  }
}




