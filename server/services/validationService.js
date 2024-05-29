const Joi = require("joi");

const schema = Joi.object({
  firstname: Joi.string().min(1).max(100).required().label("Imię").messages({
    "string.empty": "Pole imię jest puste",
    "string.min": "Imię jest za krótkie",
    "string.max": "Imię jest za długie",
    "any.required": "Pole imię jest wymagane",
  }),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .label("Login")
    .messages({
      "string.empty": "Pole login jest puste",
      "string.min": "Min. 3 znaki",
      "string.max": "Max. 30 znaków",
      "string.alphanum": "Tylko znaki alfanumeryczne",
      "any.required": "Pole login jest wymagane",
    }),
  email: Joi.string().email().required().label("Email").messages({
    "string.email": "Nieprawidłowy adres e-mail",
    "any.required": "Pole e-mail jest wymagane",
  }),
  password: Joi.string().min(6).required().label("Hasło").messages({
    "string.min": "Min. 6 znaków",
    "any.required": "Pole hasło jest wymagane",
  }),
  repeatPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("Powtórzone hasło")
    .messages({
      "any.only": "Hasła nie są identyczne",
      "any.required": "Potwierdzenie hasła wymagane",
    }),
});

const registerValidation = (data) => {
  return schema.validate(data, { abortEarly: false });
};

module.exports = {
  registerValidation,
};
