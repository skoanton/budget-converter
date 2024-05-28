import { Router } from "express";
import z from "zod";
import { Account } from "../../types/accounts";
import { getAllEntities } from "../utils/getAllEntities";
import { getEntitiesById } from "../utils/getEntitiesById";
import { handlePostRequest } from "../utils/handlePostRequest";
import { getEntitiesByName } from "../utils/getEntitiesByName";


const router = Router();

const accountSchema = z.object({
    name: z.string(),
    balance: z.number(),
})

router.get("/", async (req,res) => {

   await getAllEntities<Account>("accounts",res);

})

router.get("/id/:id", async (req,res) => {
    await getEntitiesById<Account>("accounts",req,res);
})

router.get("/name/:name", async (req,res) => {
    await getEntitiesByName<Account>("accounts",req,res);
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