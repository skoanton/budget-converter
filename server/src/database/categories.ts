import { RowDataPacket } from "mysql2";
import { ModifyQuery, SelectQuery } from "./queryUtils";


export interface ICategoriesRow extends RowDataPacket {
    category_id: number;
    category_name: string;
    category_type_id: number;
}


export function GetAll () {
    const queryString = "SELECT * FROM categories;"
    return SelectQuery<ICategoriesRow>(queryString);
}

export function Add(category_name:string,category_type_id:number) {
    const queryString = "INSERT INTO categories VALUES (?,?,?)"
    return ModifyQuery(queryString);
}