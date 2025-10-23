import * as yup from "yup";

const pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup.string().min(8).required("This field is required"),
});

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  birth: yup
    .date()
    .max(new Date(), "Birth date cannot be in the future")
    .required("This field is required"),
  email: yup
    .string()
    .matches(emailRegEx, { message: "Please enter a valid email" })
    .required("This field is required"),
  password: yup
    .string()
    .min(8)
    .matches(pwdRegEx, {
      message:
        "Password must include lowercase, uppercase, digit, and special character",
    })
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This field is required"),
  acceptTos: yup.boolean().oneOf([true], "Please accept the terms of services"),
});
