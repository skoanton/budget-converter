import { Router } from "express";
import { error } from "console";
import z from "zod";
import { Category } from "../../types/categories";
import { getAllEntities } from "../utils/getAllEntities";
import { handlePostRequest } from "../utils/handlePostRequest";
import { getEntitiesById } from "../utils/getEntitiesById";
import { updateEntityById } from "../utils/updateEntityById";
const router = Router();

const categorySchema = z.object({
    name: z.string(),
    budget: z.number(),
    spent: z.number(),
    category_type_ID: z.number(),
    description_ID: z.number().nullable()
});


const updateCategorySchema = z.object({
    name: z.string().optional(),
    budget: z.number().optional(),
    spent: z.number().optional(),
    category_type_ID: z.number().optional(),
    description_ID: z.number().optional().nullable(),
  });


router.get("/", async (req,res) => {
    getAllEntities<Category>("categories",res);
})

router.get("/id/:id", async (req,res) => {
    await getEntitiesById("categories",req,res);
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
   await updateEntityById("categories",req,res,reqBody);

})

export default router;