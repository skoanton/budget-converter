import { Router } from "express";

import { Description } from "../../types/descriptions";

import z from "zod";
import { getAllPosts } from "../../lib/getAllPosts";
import { getPostByName } from "../../lib/getPostByName";
import { handlePostRequest } from "../../lib/handlePostRequest";
import { getPostById } from "../../lib/getPostsById";




const descriptionSchema = z.object({
    name: z.string(),
})

const router = Router();
router.get("/", async(req,res) => {
   await getAllPosts<Description>("descriptions",res);
})

router.get("/name/:name", async (req,res) => {
   await getPostByName<Description>("descriptions",req,res);
})

router.get("/id/:id",async(req,res) => {
   await getPostById<Description>("descriptions",req,res);
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