export interface Category {
    id?: number;
    name: string;
    budget: number;
    spent: number;
    category_type_ID: number;
    description_ID: number | null;
  }


  export interface CategoryType {
    category_type_id: number;
    category_type_name: string;
  }