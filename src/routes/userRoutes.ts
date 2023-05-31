import express from 'express';
import authMiddleware from 'middlewares/authMiddleware';
import userController  from 'controllers/userController';

export const userRoutes = express.Router();

userRoutes.get('/:id', authMiddleware, userController.getUserById);
userRoutes.put('/:id', authMiddleware, userController.updateUser);
userRoutes.delete('/:id', authMiddleware, userController.deleteUser);

export default userRoutes;
