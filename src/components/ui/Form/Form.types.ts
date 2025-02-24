import { AnyObjectSchema } from "yup";

export interface IFormProps {
  //   children: React.ReactNode;
  //   initialValues: object[];
  validationSchema: AnyObjectSchema;
  handleFormData: () => void;
  buttonText: string;
  linkButtonText: string;
  fields: { field: string; placeholder: string }[];
  className?: string;
}
