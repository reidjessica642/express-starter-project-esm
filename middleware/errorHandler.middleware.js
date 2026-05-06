import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) =>
{
    logger.error(`chickenAgeMiddleware invoked with error ${err.message}`);

    res.status(500).json(
    {
        error: 'An error occured. Sorry.'
    });

    next();
    return;
}