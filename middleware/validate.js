// middleware/validate.js

/*
 Generic validation middleware
 Usage:
 router.post("/", validate(schema), controller)
*/

const validate = (schema) => {
  return (req, res, next) => {

    const { value, error } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: error.details.map(e => e.message)
      });
    }

    // Replace body with sanitized value
    req.body = value;

    next();
  };
};

module.exports = validate;