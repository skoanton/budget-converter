import { Router } from "express";
import db from "../database";
import { error } from "console";
import { ICategoriesRow } from "../database/categories";
import z from "zod";
const router = Router();

const categorySchema = z.object({
    name: z.string(),
    budget: z.number(),
    spent: z.number(),
    category_type_ID: z.number(),
    description_ID: z.number().nullable()
});


router.get("/", async (req,res) => {
    try {     
        const [categories] = await db.categories.GetAll();
        if(!categories){
            return res.status(404).json({ error: "Categories empty" });
        }
        res.json(categories);

    } catch (error) {
        res.status(500).json, ({error: "Internal server error"});
        
    }

})

router.post("/", async (req,res) => {

    const validationResult = categorySchema.safeParse(req.body);
    console.log(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }

    const reqBody: Omit<ICategoriesRow, 'id'> = validationResult.data;

try {
    const data = await db.categories.Add(reqBody);
    if(!data){
        return res.status(404).json ({error: "Data is empty?"});
    }
    res.json(data);
} catch (error) {
    res.status(500).json, ({error: "Internal server error"});
}
    
}) 

export default router;