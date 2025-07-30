import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please provide a full name")
    .min(2, "The name should be more than 2 character long")
    .max(25, "The name should not be more than 25 characters long"),
  email: Yup.string()
    .required("Please provide a your email")
    .email("Provide a valid email")
    .lowercase(),
  password: Yup.string()
    .required("Please provide a password")
    .min(6, "Password must be at least 6 characters")
    .max(125, "Password must be less than 125 characters"),
  confirm_password: Yup.string()
    .required("Confirm password required")
    .oneOf([Yup.ref("password")], "Password does not match !!"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please provide a your email")
    .email("Provide a valid email")
    .lowercase(),
  password: Yup.string()
    .required("Please provide a password")
    .min(6, "Password must be at least 6 characters")
    .max(125, "Password must be less than 125 characters"),
});
