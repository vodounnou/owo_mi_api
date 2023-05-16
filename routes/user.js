import { Router } from 'express';
import UsersControllers from '../controllers/userController.js';


const router = Router();

router.post('/register', UsersControllers.register);
router.post('/login', UsersControllers.login);
router.get('/status', UsersControllers.status);

//router.get('/profil',UsersControllers.getProfile);
/*router.get('/user/:id');*/

export default router;