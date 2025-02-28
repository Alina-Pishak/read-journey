import * as yup from "yup";

import Form from "@/components/ui/Form";
import { useAppDispatch } from "@/lib/hooks";
import { registerUserThunk } from "@/lib/user/thunks";
import { IUSer } from "@/types/user/user";

const validationSchemaRegister = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const handleFormData = async (data: IUSer) => {
    console.log("first");
    await dispatch(registerUserThunk(data));
  };
  return (
    <Form
      fields={[
        { field: "name", placeholder: "Name:" },
        { field: "email", placeholder: "Mail:" },
        { field: "password", placeholder: "Password:" },
      ]}
      validationSchema={validationSchemaRegister}
      handleFormData={handleFormData}
      buttonText="Registration"
      linkButtonText="Already have an account?"
    />
  );
};

export default RegisterForm;
