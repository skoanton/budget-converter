import { ResultSetHeader } from "mysql2";
import { ModifyQuery, SelectQuery } from "./queryUtils";

export interface ICategoriesRow {
  id?: number;
  name: string;
  budget: number;
  spent: number;
  category_type_ID: number;
  description_ID: number | null;
}

export function GetAll() {
  const queryString = "SELECT * FROM categories;";
  return SelectQuery<ICategoriesRow>(queryString);
}

export async function Add(category: Omit<ICategoriesRow, "id">): Promise<ResultSetHeader> {
  const queryString = `
    INSERT INTO categories (name, budget, spent, category_type_ID, description_ID)
    VALUES (?, ?, ?, ?, ?)
`;
console.log("Query string:",queryString);
const params = [
    category.name,
    category.budget,
    category.spent,
    category.category_type_ID,
    category.description_ID
];

  return ModifyQuery(queryString, params);
}
