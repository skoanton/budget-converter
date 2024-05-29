import { Router } from "express"

import { CategoryType } from "../../types/categories";
import { getPostById } from "../../lib/getPostsById";
import { getAllPosts } from "../../lib/getAllPosts";



const router = Router();

//GET /api/categories/types/123
router.get("/id/:id", async (req,res) => {
   getPostById<CategoryType>("category_type",req,res);
});


//GET /api/categories/types
router.get("/", async (req,res) => {
   getAllPosts<CategoryType>("category_type",res);
});

export default router;