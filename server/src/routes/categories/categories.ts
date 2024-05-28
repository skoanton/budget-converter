import { Router } from "express";
import { error } from "console";
import z from "zod";
import { Category } from "../../types/categories";
import { getAllEntities } from "../utils/getAllEntities";
import { handlePostRequest } from "../utils/handlePostRequest";
const router = Router();

const categorySchema = z.object({
    name: z.string(),
    budget: z.number(),
    spent: z.number(),
    category_type_ID: z.number(),
    description_ID: z.number().nullable()
});


router.get("/", async (req,res) => {
   
    getAllEntities<Category>("categories",res);

})

router.post("/", async (req,res) => {
    
    const validationResult = categorySchema.safeParse(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<Category, 'id'> = validationResult.data; 
    
    handlePostRequest("categories",reqBody,res);
   
}) 

export default router;