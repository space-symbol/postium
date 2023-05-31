import { User } from 'models/models';
import { UserAttributes, UserCreationAttributes } from 'types/userTypes';

export class UserServices {
    async getAllUsers(): Promise<User[]> {
        const users = await User.findAll();
        return users;
    }

    async getUserById(id: number): Promise<User | null> {
        const user = await User.findByPk(id);
        return user;
    }

    async createUser(data: UserCreationAttributes): Promise<User | null> {
        const {username, email, password} = data;
        const user = await User.create({username, email, password});
        return user;
    }

    async updateUser({id, email, username, password}: UserAttributes): Promise<User | null> {
        await User.update({email, username, password}, { where: { id } });
        const user = await User.findByPk(id);
        return user;
    }

    async deleteUser(id: number): Promise<void> {
        await User.destroy({ where: { id } });
    }
}
export default new UserServices();
