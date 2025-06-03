interface HttpError extends Error {
  status?: number;
}

export default function createHttpError(message: string, status: number): HttpError {
  const error = new Error(message) as HttpError;
  error.status = status;
  return error;
}
