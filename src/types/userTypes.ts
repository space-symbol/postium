import { Optional } from 'sequelize';
import { Request } from 'express';

export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}

export interface UserLoginRequest extends Request {
    body: Omit<UserAttributes, 'id' | 'username'>
}

export interface UserRegisterRequest extends Request{
    body: Omit<UserAttributes, 'id'>
}

export interface UserUpdateRequest extends Request{
    body: UserAttributes
}

export type UserPayload = Omit<UserAttributes, 'password'>


