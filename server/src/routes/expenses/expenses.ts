import { Router } from "express";
import z, { number, string } from "zod";
import { getExpensesByMonth } from "../../lib/getExpensesByMonth";
const router = Router();

const getMonthylExpensesSchema = z.object({
    category_ID: z.number(),
    startDate: z.string(),
    endDate: z.string(),
})

type MonthlyExpsense = z.infer<typeof getMonthylExpensesSchema>;
router.post("/total",async(req,res) => {

    const validationResult = getMonthylExpensesSchema.safeParse(req.body);
    if(!validationResult.success){
        return res.status(400).json({ error: validationResult.error.errors });
    }
    const reqBody: MonthlyExpsense = validationResult.data;

    await getExpensesByMonth<MonthlyExpsense>(reqBody,res)


})



export default router;