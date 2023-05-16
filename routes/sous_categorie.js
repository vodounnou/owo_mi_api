import {Router} from "express";
import ScategorieController from "../controllers/scategorieController.js";

const router = Router();

router.post('/create_scat', ScategorieController.create);
export default router;
