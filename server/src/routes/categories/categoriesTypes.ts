import { Router } from "express"
import { getEntitiesById } from "../utils/getEntitiesById";
import { CategoryType } from "../../types/categories";
import { getAllEntities } from "../utils/getAllEntities";
const router = Router();

//GET /api/categories/types/123
router.get("/:id", async (req,res) => {
   getEntitiesById<CategoryType>("category_type",req,res);
});


//GET /api/categories/types
router.get("/", async (req,res) => {
   getAllEntities<CategoryType>("category_type",res);
});

export default router;