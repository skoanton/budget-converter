import { Router } from "express";
import z from "zod";
import { Account } from "../../types/accounts";

import { getAllPosts } from "../../lib/getAllPosts";
import { getPostById } from "../../lib/getPostsById";
import { getPostByName } from "../../lib/getPostByName";
import { handlePostRequest } from "../../lib/handlePostRequest";



const router = Router();

const accountSchema = z.object({
    name: z.string(),
    balance: z.number(),
})

router.get("/", async (req,res) => {

   await getAllPosts<Account>("accounts",res);

})

router.get("/id/:id", async (req,res) => {
    await getPostById<Account>("accounts",req,res);
})

router.get("/name/:name", async (req,res) => {
    await getPostByName<Account>("accounts",req,res);
})

router.post("/", async (req,res) => {

    const validationResult = accountSchema.safeParse(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<Account, "id"> = validationResult.data
   await  handlePostRequest("accounts",reqBody,res);

})

export default router;