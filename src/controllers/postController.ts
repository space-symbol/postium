import { NextFunction, Request, Response } from 'express';
import PostServices from 'services/postServices';
import { PostCreateRequest, PostUpdateRequest } from 'types/postTypes';

const postController = {
    getAllPosts: async (req, res: Response) => {
        const posts = await PostServices.getAllPosts();
        res.status(200).json({posts});
    },
    getPostById: async (req, res: Response) => {
        const postId = req.params.id;
        const post = await PostServices.getPostById(postId);
        res.status(200).json(post);

    },
    createPost: async (req: PostCreateRequest, res: Response, next: NextFunction) => {
        try {
            const {id} = req.user;
            const {title, content} = req.body;
            console.log(id, title, content);
            const post = await PostServices.createPost(title, content, id);
            res.status(201).json({post});
        } catch (err) {
            next(err);
        }

    },
    updatePost: async (req: PostUpdateRequest, res: Response) => {
        try {
            const {id, title, content} = req.body;
            const post = await PostServices.updatePost(id, title, content);
            res.status(200).json({post});
        } catch (err) {
            console.log(err);
        }

    },
    deletePost: async (req, res: Response) => {
        const postId = req.params.id;
        await PostServices.deletePost(postId);
        res.status(204).send('User has already deleted');
    },
};
export default postController;
