const auth = (req, res, next) => {
  const { admin } = req.query;
  if (admin === "admin") {
    next();
  } else {
    res.status(401).json({ meesage: "user not authorized" });
  }
};

const logger = (req, res, next) => {
  console.log(req.url, req.method);
  next();
};

module.exports = {
  auth,
  logger,
};
