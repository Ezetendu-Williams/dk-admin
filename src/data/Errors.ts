const ERRORS = {
  required: (field: string) => `${field} is a required field`,
  email: "provide a valid email",
  url: "website must contain https://",
  confirmPassword: "passwords must match",
  passwordLengthValidation: "password must contain at least 5 characters",
};

export default ERRORS;
