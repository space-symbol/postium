import { Request, Response } from 'express';
import UserServices from '../services/userServices';
import { UserUpdateRequest } from 'types/userTypes';

const userController = {
    getUserById: async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id);
        const user = await UserServices.getUserById(userId);
        res.status(200).json({ user });
    },
    updateUser: async (req: UserUpdateRequest, res: Response) => {
        const {id, username, password, email} = req.body;
        const updatedUser = await UserServices.updateUser({id, email, password, username});
        res.status(200).json({ user: updatedUser });
    },
    deleteUser: async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id);
        await UserServices.deleteUser(userId);
        res.status(204).send();
    },
};
export default userController;
