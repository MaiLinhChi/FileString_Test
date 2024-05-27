const express = require("express");

const Validation = require("../middlewares/validation")
const AuthValidate = require("../validations/auth")
const Auth = require("../controllers/Auth");

const router = express.Router();

router.post("/sign-up", Validation(AuthValidate.signUp), Auth.signUp);

router.post("/sign-in", Auth.signIn);

router.delete("/logout", Auth.logout);

router.post("/refresh-token", Auth.refreshToken);

module.exports = router;