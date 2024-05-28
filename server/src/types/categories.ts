export interface Category {
    id?: number;
    name: string;
    budget: number;
    spent: number;
    category_type_ID: number;
    description_ID: number | null;
  }


  export interface CategoryType {
    id: number;
    type: string;
  }