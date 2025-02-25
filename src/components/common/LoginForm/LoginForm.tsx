import * as yup from "yup";

import Form from "@/components/ui/Form";

const validationSchemaRegister = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  return (
    <Form
      fields={[
        { field: "email", placeholder: "Mail:" },
        { field: "password", placeholder: "Password:" },
      ]}
      validationSchema={validationSchemaRegister}
      handleFormData={() => console.log("first")}
      buttonText="Log in"
      linkButtonText="Don’t have an account?"
      variant="login"
    />
  );
};

export default LoginForm;
