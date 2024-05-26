import { RowDataPacket } from "mysql2";
import { SelectQuery } from "./queryUtils";

export interface ICategoryTypeRow extends RowDataPacket {
    category_type_id: number;
    category_type_name: string;
  }

export function GetAll() {
    return SelectQuery<ICategoryTypeRow>("SELECT * FROM category_types;")
}  

export function GetOne(id:string) {
  const queryString = `SELECT * FROM category_types WHERE category_type_id = ?;`
  return SelectQuery<ICategoryTypeRow>(queryString,[id])
}  