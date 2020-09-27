import React from "react";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object({
  email: Yup.string()
    .trim()
    .lowercase()
    .required("Work email is required")
    .email("Please enter a valid email"),
  password: Yup.string()
    .required("Password Required")
    .min(
      10,
      "Password must be at least 10 characters long and contain at least 1 number or special character"
    )
    .matches(
      /^(?=.*?[a-zA-Z][0-9])|(?=.*?[-!$%^&*()_+|~=`{}[\]:";'<>?,.\\/|\d])(?=.*?[A-Za-z])/g, // special characters used in this regex were taken from wavely-web
      "Password must be at least 10 characters long and contain at least 1 number or special character"
    ),
  confirmPassword: Yup.string()
    .required("Password Required")
    .test("passwords-match", "Both passwords need to be the same", function (
      value
    ) {
      return this.parent.password === value;
    })
}).defined();

type RegisterFormValues = Yup.InferType<typeof RegisterSchema>;

type RegisterFormProps = {
  onSubmit: (data: RegisterFormValues) => void;
};

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const submitHandler = async (values: RegisterFormValues, { setSubmitting, setFieldError }: FormikHelpers<RegisterFormValues>) => {
    try {
      await onSubmit(values);
    } catch (e) {
      setFieldError("submitError", e.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: ""
      }}
      onSubmit={submitHandler}
      validationSchema={RegisterSchema}
    >
      {({ isValid, isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" />
          </div>

          <button disabled={!isValid || isSubmitting} type="submit">
            {!isSubmitting ? (
              "Register"
            ) : (
                <div role="progressbar">
                  <p>Loading...</p>
                </div>
              )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
