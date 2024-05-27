const User = require("../models/Users")
const CryptoJS = require("crypto-js");
const { generatedAccessToken, generatedRefreshToken } = require("../validations/token");
const { expiredInAccessToken, expiredInRefreshToken } = require("../configs/token");

class Auth {
    async signUp(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({
                    message: "Email already exists!",
                    messageCode: "email_existed",
                }); 
            }

            const newUser = await User.create({
                ...req.body,
                password: CryptoJS.AES.encrypt(
                  req.body.password,
                  process.env.SECRET_KEY
                ),
            });
            const accessToken = generatedAccessToken(newUser);
            const refreshToken = generatedRefreshToken(newUser);
            const { password, ...data } = newUser._doc;
            return res.status(201)
            .cookie("refresh_token", "Bearer " + refreshToken, {
              maxAge: expiredInRefreshToken * 1000, // ms
              httpOnly: true,
              secure: true,
            })
            .json({ ...data, accessToken });
        } catch (error) {
            res.status(error.status).json(error);
        }
    }
    
    async signIn(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({
                    message: "Email doen't exiting!",
                    messageCode: "email_not_found",
                });
            }
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            if (originalText !== req.body.password) {
                return res.status(400).json({
                    message: "Wrong password!",
                    messageCode: "wrong_password",
                });
            }

            const accessToken = generatedAccessToken(user);
            const refreshToken = generatedRefreshToken(user);
            const { password, ...info } = user._doc;
      
            return res
              .status(200)
              .cookie("refresh_token", "Bearer " + refreshToken, {
                maxAge: expiredInRefreshToken * 1000, // ms
                httpOnly: true,
                secure: true,
              })
              .json({info, accessToken});
          } catch (error) {
            res.status(500).json(error);
          }
    }

    async refreshToken(req, res) {
        try {
            const user = await verifyAndDeleteRefreshToken(req);
            const accessToken = generatedAccessToken(user);
            const refreshToken = generatedRefreshToken(user);
            return (
              res
                .status(200)
                .cookie("refresh_token", "Bearer " + refreshToken, {
                    maxAge: expiredInRefreshToken * 1000, // ms
                    httpOnly: true,
                    secure: true,
                })
                .json({
                    messageCode: "refresh_token_successfully",
                    accessToken
                })
            );
          } catch (error) {
            if (error.name === "TokenExpiredError") {
              return res.status(401).json(error);
            }
            return res.status(500).json(error);
          }
    }

    async logout(req, res) {
        try {
            res.status(200).json("Logout successfully");
          } catch (error) {
            res.status(500).json(error);
          }
    }
}

module.exports = new Auth