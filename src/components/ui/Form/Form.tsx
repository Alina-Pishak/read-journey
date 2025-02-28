import React, { FC } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import LinkButton from "../LinkButton";

import { IFormProps } from "./Form.types";
import clsx from "clsx";
import Input from "../Input";

const Form: FC<IFormProps> = ({
  validationSchema,
  fields,
  handleFormData,
  variant,
  buttonText,
  linkButtonText,
  className,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = handleSubmit(handleFormData);

  return (
    <form onSubmit={onSubmit} className={className}>
      {fields.map(({ field, placeholder }, index) => (
        <label key={index}>
          <Input
            register={{ ...register(field) }}
            placeholder={placeholder}
            isLast={index === fields.length - 1}
          />

          {errors[field]?.message &&
            typeof errors[field]?.message === "string" && (
              <p>{errors[field].message}</p>
            )}
        </label>
      ))}

      <div
        className={clsx(
          "flex justify-start items-center gap-[14px] mt-5 md:mt-[82px]",
          variant === "login" && "sm:mt-[72px] md:mt-[146px] xl:mt-[146px]",
          variant === "filters" && "justify-start mt-5 md:mt-5 xl:mt-5"
        )}
      >
        <Button
          type="submit"
          variant={variant === "filters" ? "primary" : "secondary"}
          className="py-3 px-7 md:py-4 md:px-[54px]"
        >
          {buttonText}
        </Button>
        {variant !== "filters" && (
          <LinkButton href="">{linkButtonText}</LinkButton>
        )}
      </div>
    </form>
  );
};

export default Form;
