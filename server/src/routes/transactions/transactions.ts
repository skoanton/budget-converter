import { Router } from "express"
import { getAllEntities } from "../utils/getAllEntities";
import { getEntitiesById } from "../utils/getEntitiesById";
import z from "zod";
import { Transaction } from "../../types/transactions";
import { handlePostRequest } from "../utils/handlePostRequest";
import { updateEntityById } from "../utils/updateEntityById";
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

    await getAllEntities("transactions",res);

})

router.get("/id/:id",async(req,res) => {

   await getEntitiesById("transactions",req,res);

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
   await updateEntityById("transactions",req,res,formattedReqBody);

})


export default router;

