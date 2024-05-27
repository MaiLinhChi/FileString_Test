const Joi = require("joi");

const signUp = Joi.object({
  fullName: Joi.string().min(2).required(),
  address: Joi.string().min(2).required(),
  email: Joi.string().pattern(new RegExp("gmail.com$")).email().required(),
  password: Joi.string().min(6).max(32),
});

const signIn = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(32),
});

module.exports = {
    signUp,
    signIn,
};
