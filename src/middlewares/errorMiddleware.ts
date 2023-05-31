import { Request, Response } from 'express';
import MyCustomError from '../error/MyCustomError';

const errorMiddleware = (err: Error, req: Request, res: Response) => {
    console.error(err);

    if (err instanceof MyCustomError) {
        res.status(err.statusCode).json({
            message: err.message
        });
    } else {
        res.status(500).json({
            message: 'Произошла ошибка на сервере',
        });
    }
};

export default errorMiddleware;
