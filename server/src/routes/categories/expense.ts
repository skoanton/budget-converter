import { Router } from "express";
import { getAllEntities } from "../utils/getAllEntities";
import { Category } from "../../types/categories";
import { getCategoriesByType } from "../utils/getCategoriesByType";


const router = Router();

router.get("/", async (req,res) => {
   await getCategoriesByType<Category>("categories",2,res);
    
})

export default router;