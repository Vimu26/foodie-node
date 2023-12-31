const loginUser = {
  type: "object",

  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
    },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const registerUser = {
  type: "object",

  properties: {
    first_name: {
      type: "string",
    },
    last_name: {
      type: "string",
    },
    email: {
      type: "string",
      format: "email",
    },
    contact_number: {
      type: "string",
      minLength: 10,
      maxLength: 10,
    },
    address: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: [
    "first_name",
    "last_name",
    "email",
    "contact_number",
    "address",
    "password",
  ],
  additionalProperties: false,
};

module.exports = { loginUser, registerUser };
