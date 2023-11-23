const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ success: true, error: err });
};

module.exports = errorHandler;
