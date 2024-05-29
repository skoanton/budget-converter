import { Router } from "express"

import z from "zod";
import { Transaction } from "../../types/transactions";
import { getAllPosts } from "../../lib/getAllPosts";
import { getPostById } from "../../lib/getPostsById";
import { handlePostRequest } from "../../lib/handlePostRequest";
import { updatePostById } from "../../lib/updatePostById";


const router = Router();

const transactionsSchema = z.object({
    amount: z.number(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }), // Validera datumsträngen
    description_ID: z.number(),
    category_ID: z.number(),
    account_ID: z.number(),
})
type TransactionInput = z.infer<typeof transactionsSchema>;

const formatDateForMySQL = (date: Date): string => {
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

router.get("/",async (req,res) => {

    await getAllPosts("transactions",res);

})

router.get("/id/:id",async(req,res) => {

   await getPostById("transactions",req,res);

})

router.post("/",async(req,res) => {

    const validationResult = transactionsSchema.safeParse(req.body);

    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<TransactionInput, 'id'> = validationResult.data;
    console.log("Body to add innan:",reqBody )
    const formattedReqBody = {
        ...reqBody,
        date: new Date(reqBody.date),
      };
      console.log("Body to add efter:",formattedReqBody )
   await handlePostRequest("transactions",formattedReqBody,res);
})

router.patch("/id/:id",async (req,res) => {
    const validationResult = transactionsSchema.safeParse(req.body);

    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: Omit<TransactionInput, 'id'> = validationResult.data; 
    const formattedReqBody = {
        ...reqBody,
        date: new Date(reqBody.date),
      };
   await updatePostById("transactions",req,res,formattedReqBody);

})


export default router;

