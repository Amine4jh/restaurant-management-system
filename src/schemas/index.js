import * as yup from "yup";

const pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
const fileSize2MB = 2 * 1024 * 1024;

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

export const addMealSchema = yup.object().shape({
  image: yup
    .mixed()
    .test(
      "imageFormat",
      'You can just add images (".png", ".jpg" or ".jpeg")',
      (value) => !value || (value && supportedFormats.includes(value.type))
    )
    .test(
      "imageSize",
      "Please upload an image smaller than 2 MB",
      (value) => !value || (value && value.size <= fileSize2MB)
    )
    .required("Please upload an image"),
  name: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  price: yup
    .number()
    .positive("The price must be positive")
    .required("This field is required"),
});
