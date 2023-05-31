import { Router } from 'express';
import authMiddleware  from 'middlewares/authMiddleware';
import postController from 'controllers/postController';

const postRoutes = Router();

postRoutes.get('/', authMiddleware, postController.getAllPosts);
postRoutes.get('/:id', authMiddleware, postController.getPostById);
postRoutes.post('/', authMiddleware, postController.createPost);
postRoutes.patch('/:id', authMiddleware, postController.updatePost);
postRoutes.delete('/:id', authMiddleware, postController.deletePost);

export default postRoutes;
