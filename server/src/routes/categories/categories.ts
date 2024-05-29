import { Router } from "express";
import z from "zod";
import { Category } from "../../types/categories";

import { getAllPosts } from "../../lib/getAllPosts";
import { getPostById } from "../../lib/getPostsById";
import { deletePostByID } from "../../lib/deletePostByID";
import { handlePostRequest } from "../../lib/handlePostRequest";
import { updatePostById } from "../../lib/updatePostById";
const router = Router();

const categorySchema = z.object({
    name: z.string(),
    budget: z.number(),
    spent: z.number(),
    category_type_ID: z.number(),
});


const updateCategorySchema = z.object({
    name: z.string().optional(),
    budget: z.number().optional(),
    spent: z.number().optional(),
    category_type_ID: z.number().optional(),
  });


router.get("/", async (req,res) => {
   await getAllPosts<Category>("categories",res);
})

router.get("/id/:id", async (req,res) => {
    await getPostById("categories",req,res);
})

router.delete("/id/:id", async (req,res) => {
   await deletePostByID("categories",req,res);
})

router.post("/", async (req,res) => {
    
    const validationResult = categorySchema.safeParse(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<Category, 'id'> = validationResult.data; 
    
    handlePostRequest("categories",reqBody,res);
   
}) 

router.patch("/id/:id",async (req,res) => {
    console.log("Req body", req.body);
    const validationResult = updateCategorySchema.safeParse(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Partial<Category> = validationResult.data; 
   await updatePostById("categories",req,res,reqBody);

})

export default router;

