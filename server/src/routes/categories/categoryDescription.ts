import { Router } from "express";
import z from "zod"
import { CategoryDescription } from "../../types/categories";
import { handlePostRequest } from "../../lib/handlePostRequest";
import { getAllPosts } from "../../lib/getAllPosts";
import { getPostById } from "../../lib/getPostsById";

const router = Router();

const categoryDescriptionSchema = z.object({
    category_ID : z.number(),
    description_ID: z.number()
})

router.post("/", async (req,res) => {
    
    const validationResult = categoryDescriptionSchema.safeParse(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<CategoryDescription, 'id'> = validationResult.data; 
    
    await handlePostRequest("category_descriptions",reqBody,res);
   
})


router.get("/",async (req,res) => {

    await getAllPosts<CategoryDescription>("category_descriptions",res);
})



export default router;