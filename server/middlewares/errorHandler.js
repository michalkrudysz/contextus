export default function errorHandler(err, req, res, next) {
  console.error("Error status: ", err.status);
  console.error("Error message: ", err.message);
  console.error("Stack trace: ", err.stack);

  const errorResponse = {
    message: err.message,
    status: err.status || 500,
  };

  if (process.env.NODE_ENV === "development") {
    errorResponse.stack = err.stack;
  }

  res.status(err.status || 500).json({ error: errorResponse });
}
