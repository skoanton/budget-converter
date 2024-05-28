import { Router } from "express";
import categoriesTypeRouter from "./categories/categoriesTypes"
import categoriesRouter from "./categories/categories";
import incomeCategoriesRouter from "./categories/income";
import expenseCategoriesRouter from "./categories/expense";
import accountsRouter from "./accounts/accounts";
import descriptionRouter from "./descriptions/descriptions";
import transactionsRouter from "./transactions/transactions";
const router = Router();

router.use("/categories/types",categoriesTypeRouter);
router.use("/categories",categoriesRouter);
router.use("/categories/income",incomeCategoriesRouter);
router.use("/categories/expense",expenseCategoriesRouter);
router.use("/accounts",accountsRouter);
router.use("/descriptions",descriptionRouter);
router.use("/transactions",transactionsRouter);

export default router;