export interface Category {
    id: number | string;
    name: string;
    budget: number;
    spent: number;
    category_type_ID: number;
  }


  export interface CategoryType {
    id: number;
    type: string;
  }


  export interface CategoryDescription{
    id?:number,
    category_ID:number,
    description_ID:number
  }