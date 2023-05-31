import express from 'express';
import cors from 'cors';
import sequelize from 'database/database';
import logger from 'utils/logger';
import authRoutes from 'routes/authRoutes';
import postRoutes from 'routes/postRoutes';
import userRoutes from 'routes/userRoutes';
import errorMiddleware from 'middlewares/errorMiddleware';
import * as dotenv from 'dotenv';
dotenv.config();

const index = express();

index.use(cors());
index.use(express.json());

index.use('/api/auth', authRoutes);
index.use('/api/posts', postRoutes);
index.use('/api/users', userRoutes);

index.use(errorMiddleware);

const PORT = process.env.PORT;
const start = () => {
    try {
        sequelize.authenticate().then(() => console.log('db connected')).catch((err: Error) => {
            logger.error(err);
            console.error(err);
        });
        sequelize
            .sync()
            .then(() => {
                index.listen(PORT, () => {
                    logger.info(`Server started on port ${PORT}`);
                });
            })
            .catch((err: Error) => {
                logger.error(`Unable to connect to the database: ${err}`);
            });
    } catch (e) {
        console.log(e);
    }
};

start();
