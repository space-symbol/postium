import { Router } from 'express';
import authController from 'controllers/authController';

const authRoutes = Router();

authRoutes.post('/login', authController.login);
authRoutes.post('/register', authController.register);

export default authRoutes;
