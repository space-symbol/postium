import { UserPayload } from 'types/userTypes';
import { Dialect } from 'sequelize';
import { Mode } from 'types/configTypes';

export {};
declare global {
    namespace Express {
        interface Request{
            params: {
                id: number;
            }
            user: UserPayload;
        }
    }
}
