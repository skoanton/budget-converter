import { Router } from "express";
import categoriesTypeRouter from "./categoriesTypes"
import categoriesRouter from "./categories";
const router = Router();

router.use("/categories/types",categoriesTypeRouter);
router.use("/categories",categoriesRouter);


export default router;