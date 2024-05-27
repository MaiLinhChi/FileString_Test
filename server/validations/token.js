const jwt = require("jsonwebtoken");
const {expiredInAccessToken, expiredInRefreshToken} = require("../configs/token")

module.exports = {
  generatedAccessToken: (user) => {
    const userInfo = {
      _id: user._id,
    };
    return jwt.sign(userInfo, process.env.SECRET_KEY_ACCESS_TOKEN, {
      expiresIn: expiredInAccessToken,
    });
  },
  generatedRefreshToken: (user) => {
    const userInfo = {
      _id: user._id,
    };
    return jwt.sign(userInfo, process.env.SECRET_KEY_REFRESH_TOKEN, {
      expiresIn: expiredInRefreshToken,
    });
  }
}