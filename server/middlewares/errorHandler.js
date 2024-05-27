module.exports = function (err, req, res, next) {
  console.error("Error status: ", err.status);
  console.error("Error message: ", err.message);
  console.error("Stack trace: ", err.stack);

  if (process.env.NODE_ENV === "development") {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
        status: err.status,
        stack: err.stack,
      },
    });
  } else {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  }
};
