import { NextFunction, Request, Response } from 'express';
import { verifyToken } from 'utils/helpers';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authorization token not found' });
    }
    try {
        req.user = await verifyToken(token);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid authorization token' });
    }
};
export default authMiddleware;
