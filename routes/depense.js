import { Router } from 'express';
import DepenseController from '../controllers/depenseController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.post('/depenses/create', auth,DepenseController.create);
router.get('/depenses', auth, DepenseController.getByUser);
router.get('/depenses/:id', auth, DepenseController.getById);
router.get('/depenses/:category', auth, DepenseController.getByCategory);
router.put('/depenses_up/:id', auth, DepenseController.update);
router.delete('/depenses_del/depenses/:id', auth, DepenseController.delete);
router.get('/total', auth, DepenseController.userTotal);


export default router;