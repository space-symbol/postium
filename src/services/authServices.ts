import { User } from 'models/models';
import { isEmailUnique } from 'utils/emailValidation';
import MyCustomError from 'error/MyCustomError';
import bcrypt from 'bcrypt';
import { createToken } from 'utils/helpers';

class AuthServices {
    async loginUser(email: string, password: string): Promise<string> {
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw new MyCustomError(`Invalid email. The user with ${email} email is not registered`, 401);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new MyCustomError('Invalid password', 401);
        }
        const {id, username} = user;
        return createToken({id, email, username});
    }

    async registerUser(username: string, email: string, password: string): Promise<string> {
        const candidate = await isEmailUnique(email);
        if (candidate) {
            throw new MyCustomError('User with such email has already been registered', 400);
        }
        const hashedPassword = await bcrypt.hash(password, 6);
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });
        const {id} = user;
        return createToken({id, email, username});
    }
}

export default new AuthServices();
