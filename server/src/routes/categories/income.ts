import { Router } from "express";
import { Category } from "../../types/categories";
import { getCategoriesByType } from "../../lib/getCategoriesByType";



const router = Router();

router.get("/", async (req,res) => {
    await getCategoriesByType<Category>("categories",1,res);
     
 })

export default router;