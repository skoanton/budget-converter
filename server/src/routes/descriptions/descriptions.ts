import { Router } from "express";
import { getAllEntities } from "../utils/getAllEntities";
import { getEntitiesById } from "../utils/getEntitiesById";
import { Description } from "../../types/descriptions";
import { getEntitiesByName } from "../utils/getEntitiesByName";

const router = Router();
router.get("/", async(req,res) => {
    getAllEntities<Description>("descriptions",res);
})

router.get("/:name", async (req,res) => {
    getEntitiesByName<Description>("descriptions",req,res);
})

router.get("/:id",async(req,res) => {
    getEntitiesById<Description>("descriptions",req,res);
})

export default router;