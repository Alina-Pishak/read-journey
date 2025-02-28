import { AnyObjectSchema } from "yup";

import { IUSer } from "@/types/user/user";

export interface IFormProps {
  //   children: React.ReactNode;
  //   initialValues: object[];
  validationSchema: AnyObjectSchema;
  handleFormData: (data: IUSer) => void;
  buttonText: string;
  linkButtonText: string;
  fields: { field: string; placeholder: string }[];
  variant?: "login" | "signup" | "filters";
  className?: string;
}
