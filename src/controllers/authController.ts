import { NextFunction, Response } from 'express';
import { UserLoginRequest, UserRegisterRequest } from 'types/userTypes';
import AuthServices  from 'services/authServices';

const authController = {
    login: async (req: UserLoginRequest, res: Response, next: NextFunction) => {
        try {
            const {email, password} = req.body;
            const token = await AuthServices.loginUser(email, password);
            return res.status(200).json({token});
        } catch (err) {
            next(err);
        }
    },
    register: async (req: UserRegisterRequest, res: Response, next: NextFunction) => {
        try {
            const {username, email, password} = req.body;
            const token = await AuthServices.registerUser(username, email, password);
            return res.status(201).json({token});
        } catch (err) {
            next(err);
        }
    },
};

export default authController;
