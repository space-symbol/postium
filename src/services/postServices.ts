import { Post } from 'models/models';
import MyCustomError from 'error/MyCustomError';

class PostServices {
    async getAllPosts(): Promise<Post[]> {
        return await Post.findAll();
    }

    async getPostById(id: number): Promise<Post | null> {
        return await Post.findByPk(id);
    }

    async createPost(title: string, content: string, user_id: number): Promise<Post> {
        if (!title || !content || !user_id) {
            throw new MyCustomError('Not correct post data', 400);
        }
        try {
            return await Post.create({title, content, user_id});
        } catch (err) {
            console.log(err);
            throw new MyCustomError('Failed to create new post', 400);
        }
    }

    async updatePost(id: number, title: string, content: string): Promise<Post | null> {
        try {
            const updatedPostData = {title, content};

            await Post.update(updatedPostData, {where: {id}});
            return await Post.findByPk(id);
        } catch (err) {
            console.log(err);
            throw new MyCustomError('Failed to update post', 400);
        }
    }

    async deletePost(id: number): Promise<void> {
        await Post.destroy({where: {id}});
    }
}

export default new PostServices();
