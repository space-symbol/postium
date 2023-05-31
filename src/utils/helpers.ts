import { UserPayload } from 'types/userTypes';
import jwt, { Secret } from 'jsonwebtoken';

export const createToken = (payload: UserPayload): string => {
    return jwt.sign(payload, process.env.JWT_SECRET as Secret, {expiresIn: '10h'});
};

export const verifyToken = (token: string): UserPayload => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as Secret) as UserPayload;
    } catch (err) {
        throw new Error('Invalid token');
    }
};
