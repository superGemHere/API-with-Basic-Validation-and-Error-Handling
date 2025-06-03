import { Request, Response, NextFunction } from 'express';

export function itemValidator(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { name, description } = req.body;

  if (
    !name ||
    typeof name !== 'string' ||
    name.trim() === '' ||
    !description ||
    typeof description !== 'string' ||
    description.trim() === ''
  ) {
    res.status(400).json({ error: 'Name and description are required and must be non-empty strings.' });
    return;
  }

  next();
}
