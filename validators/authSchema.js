const Joi = require("joi");


// ============================
// REGISTER VALIDATION
// ============================
exports.registerSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .max(50)
    .required(),

  role: Joi.string()
    .valid("user", "admin")
    .optional()
});


// ============================
// LOGIN VALIDATION
// ============================
exports.loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .required()
});