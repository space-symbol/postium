import { User } from 'models/models';

export async function isEmailUnique(email: string): Promise<boolean> {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    return user !== null;
}
