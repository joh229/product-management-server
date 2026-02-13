
const Joi = require("joi");


// ============================
// CREATE PRODUCT
// ============================
exports.createProductSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .required(),

  price: Joi.number()
    .positive()
    .required(),

  description: Joi.string()
    .allow("", null),

  category: Joi.string()
    .allow("", null),

  stock: Joi.number()
    .integer()
    .min(0)
});


// ============================
// UPDATE PRODUCT
// ============================
exports.updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  price: Joi.number().positive(),
  description: Joi.string().allow("", null),
  category: Joi.string().allow("", null),
  stock: Joi.number().integer().min(0)
});