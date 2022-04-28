const jwt = require("jwt-then");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw "Forbidden!!";
    const token = req.headers.authorization;
    const payload = await jwt.verify(token, process.env.SECRET);
    req.payload = payload;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Forbidden 🚫🚫🚫",
    });
  }
};
