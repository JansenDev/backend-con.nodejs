function logError(err, req, res, next) {
  console.log('logError');
  next(err);
}

function handlerError(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  logError,
  handlerError,
};
