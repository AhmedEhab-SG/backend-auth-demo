const Joi = require("joi");

const validateUser = (course) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(course);
};

module.exports = {
  validateUser,
};
