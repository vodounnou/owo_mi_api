import { Router } from 'express';
import RevenuController from "../controllers/revenuController.js";
import auth from '../middleware/auth.js';

const router = Router();

router.post('/create_rev', auth,RevenuController.create);
router.get('/revenus', auth, RevenuController.getByUser);
router.get('/revenus/:id', auth, RevenuController.getById);
router.get('/revenus/:category', auth, RevenuController.getByCategory);
router.put('/:id', auth, RevenuController.update);
router.delete('/revenus/:id', auth, RevenuController.delete);
router.get('/total', auth, RevenuController.userTotal);


export default router;