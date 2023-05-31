import { Options, Sequelize } from 'sequelize';
import {default as conf} from 'config/config';
import { Mode } from 'types/configTypes';

const env: Mode = process.env.MODE as Mode || 'development';

const config = conf[env] as Options;
const {database, username, password, dialect} = config;
if (!database || !username || !password || !dialect){
    throw new Error(`Something is wrong with some option or options:
     | database: ${database}
     | username: ${username}
     | password: ${password}
     | dialect: ${dialect}
`);

}
const sequelize = new Sequelize(database, username, password, {dialect, ...config});
export default sequelize;
