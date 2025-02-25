import React from "react";

import * as yup from "yup";

import Input from "@/components/ui/Input";
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

const Filters = () => {
  return (
    <div className="md:w-[295px]">
      <p className="font-medium text-xs leading-[12px] tracking-[-0.2px] mb-2 md:text-sm md:leading-[18px]">
        Filters:
      </p>
      <Form
        fields={[
          { field: "title", placeholder: "Book title:" },
          { field: "author", placeholder: "The author:" },
        ]}
        validationSchema={validationSchemaRegister}
        handleFormData={() => console.log("first")}
        buttonText="To apply"
        linkButtonText="Don’t have an account?"
        variant="filters"
        className="mb-5"
      />
    </div>
  );
};

export default Filters;
