import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
}

export function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err); 

  const status = err.status || 500;
  const message =
    status === 500
      ? 'Internal Server Error'
      : err.message || 'An error occurred';

  res.status(status).json({ error: message });
}
