import { Router } from "express";
import db from "../database";
import { error } from "console";
const router = Router();


router.get("/", async (req,res) => {
    try {     
        const [categories] = await db.categories.GetAll();
        if(!categories){
            throw error("Categories empty");
        }
        res.json(categories);

    } catch (error) {
        res.status(500).json, ({error: "Internal server error"});
        
    }

})


export default router;