const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.token;
  if (!token) {
    return res.status(401).json({ status: false, data: "Unauthorized Access" });
  }
  //verify the payload of the token
  jwt.verify(
    token,
    process.env.SECRET_ACCESS_TOKEN,
    (error, decodedPayload) => {
      if (!error) {
        req.userId = decodedPayload.sub;
        return next();
      }
      return res.status(401).json({
        status: false,
        Error: error,
        message: "Token is Invalid Or Expired",
      });
    },
  );
};

const validateTokenByHeaders = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ status: false, data: "Unauthorized Access" });
  }
  //verify the payload of the token
  jwt.verify(
    token,
    process.env.SECRET_ACCESS_TOKEN,
    (error, decodedPayload) => {
      if (!error) {
        req.userId = decodedPayload.sub;
        return next();
      }
      return res.status(401).json({
        status: false,
        Error: error,
        message: "Token is Invalid Or Expired",
      });
    },
  );
};

module.exports = { validateToken, validateTokenByHeaders };
