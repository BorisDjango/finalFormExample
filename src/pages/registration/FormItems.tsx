import { ChangeEvent, FC, useState } from "react";
import { IRegistrationForm } from "../../hooks/interfaces";
import { FormApi } from "final-form";
import { FormItem } from "./FormItem";

export interface IFormField {
  field: keyof IRegistrationForm;
  required: boolean;
  label: string;
  type: "text" | "password";
}

interface IProps {
  form: FormApi<IRegistrationForm, Partial<IRegistrationForm>>;
  fields: IFormField[];
}

export const FormItems: FC<React.PropsWithChildren<IProps>> = ({
  form,
  fields,
  children,
}) => {
  return (
    <>
      {fields.map((item) => (
        <FormItem key={item.field} form={form} item={item} />
      ))}
      {children}
    </>
  );
};
