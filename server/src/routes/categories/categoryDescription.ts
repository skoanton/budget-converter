import { Router } from "express";
import z from "zod"
import { CategoryDescription } from "../../types/categories";
import { handlePostRequest } from "../utils/handlePostRequest";
import { getAllEntities } from "../utils/getAllEntities";
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

    await getAllEntities<CategoryDescription>("category_descriptions",res);
})


export default router;