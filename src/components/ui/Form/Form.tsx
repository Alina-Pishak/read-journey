import React, { FC } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import LinkButton from "../LinkButton";

import { IFormProps } from "./Form.types";

const Form: FC<IFormProps> = ({
  validationSchema,
  fields,
  handleFormData,
  buttonText,
  linkButtonText,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ field, placeholder }, index) => (
        <label key={index}>
          <input
            {...register(field)}
            placeholder={placeholder}
            className="rounded-xl p-[14px] bg-bgThird mb-2 w-full font-medium text-xs leading-[1.33] tracking-[-0.02em] placeholder:text-colorSecondary"
          />

          {errors[field]?.message &&
            typeof errors[field]?.message === "string" && (
              <p>{errors[field].message}</p>
            )}
        </label>
      ))}

      <div className="flex items-center gap-[14px] mt-5">
        <Button type="submit" variant="secondary" className="py-3 px-7">
          {buttonText}
        </Button>
        <LinkButton href="">{linkButtonText}</LinkButton>
      </div>
    </form>
  );
};

export default Form;
