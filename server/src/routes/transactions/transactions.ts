import { Router } from "express"
import { getAllEntities } from "../utils/getAllEntities";
import { getEntitiesById } from "../utils/getEntitiesById";
import z from "zod";
import { Transaction } from "../../types/transactions";
import { handlePostRequest } from "../utils/handlePostRequest";
const router = Router();

const transactionsSchema = z.object({
    amount: z.number(),
    description_ID: z.number(),
    category_ID: z.number(),
    account_ID: z.number(),
})

router.get("/",async (req,res) => {


    getAllEntities("transactions",res);

})

router.get("/:id",async(req,res) => {

    getEntitiesById("transactions",req,res);

})

router.post("/",async(req,res) => {

    const validationResult = transactionsSchema.safeParse(req.body);

    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<Transaction, 'id'> = validationResult.data; 
    
    handlePostRequest("categories",reqBody,res);


})

export default router;

