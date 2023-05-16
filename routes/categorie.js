import { Router } from 'express';
import CategorieController from "../controllers/categorieController.js";

const router = Router();

router.post('/create_categorie', CategorieController.create);
router.get('/categories', CategorieController.all);

export default router;