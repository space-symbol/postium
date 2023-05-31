import { Optional } from 'sequelize';
import { Request } from 'express';

export interface PostAttributes {
    id: number;
    title: string;
    content: string;
    user_id: number;
    createdAt: Date;
    updatedAt: Date;
}

export type PostCreationAttributes = Optional<PostAttributes, 'id' | 'createdAt' | 'updatedAt'>

export interface PostCreateRequest extends Request {
    body: Pick<PostAttributes, 'title' | 'content'>;
}

export interface PostUpdateRequest extends Request {
    body: Pick<PostAttributes, 'id' | 'title' | 'content'>
}
