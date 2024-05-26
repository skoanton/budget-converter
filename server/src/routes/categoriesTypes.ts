import { Router } from "express"
import db from "../database";
const router = Router();

//GET /api/categories/types/123
router.get("/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const [type] = await  db.categoriesTypes.GetOne(id);
        res.json(type);
    } catch (error) {
        res.status(500).json({error : "interal server error"});
    }
});


//GET /api/categories/types
router.get("/", async (req,res) => {
    try {
        const types = await  db.categoriesTypes.GetAll();
        res.json(types);
    } catch (error) {
        res.status(500).json({error : "interal server error"});
    }
});

export default router;