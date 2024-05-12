const notFound = (req, res, next) => {
  const error = new Error(` ${req.originalUrl} 🚑 I think you are lost 🤦‍♀️🤦‍♀️ `);
  next(error);
};
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: error.message,
  });
};

module.exports = {
    errorHandler,
    notFound,
};
