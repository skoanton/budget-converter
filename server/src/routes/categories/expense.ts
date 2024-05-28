import { Router } from "express";
import { getAllEntities } from "../utils/getAllEntities";
import { Category } from "../../types/categories";

const router = Router();

router.get("/", async (req,res) => {
    getAllEntities<Category>("categories",res);
})

export default router;