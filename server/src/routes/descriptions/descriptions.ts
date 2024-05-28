import { Router } from "express";
import { getAllEntities } from "../utils/getAllEntities";
import { getEntitiesById } from "../utils/getEntitiesById";
import { Description } from "../../types/descriptions";
import { getEntitiesByName } from "../utils/getEntitiesByName";
import z from "zod";
import { handlePostRequest } from "../utils/handlePostRequest";


const descriptionSchema = z.object({
    name: z.string(),
})

const router = Router();
router.get("/", async(req,res) => {
   await getAllEntities<Description>("descriptions",res);
})

router.get("/name/:name", async (req,res) => {
   await getEntitiesByName<Description>("descriptions",req,res);
})

router.get("/id/:id",async(req,res) => {
   await getEntitiesById<Description>("descriptions",req,res);
})


router.post("/", async(req,res) => {

    const validationResult = descriptionSchema.safeParse(req.body);

    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<Description, 'id'> = validationResult.data; 
    
   await handlePostRequest("descriptions",reqBody,res);

})

export default router;