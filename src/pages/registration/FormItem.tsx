import { ChangeEvent, FC, useState } from "react";
import { IRegistrationForm } from "../../hooks/interfaces";
import { FormApi } from "final-form";
import { TextField } from "@mui/material";
import { IFormField } from "./FormItems";

interface IProps {
  form: FormApi<IRegistrationForm, Partial<IRegistrationForm>>;
  item: IFormField;
}

export const FormItem: FC<IProps> = ({ form, item }) => {
  const handleChange =
    (
      form: FormApi<IRegistrationForm, Partial<IRegistrationForm>>,
      field: keyof IRegistrationForm
    ) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      form.change(field, e.target.value);
    };

  const checkError = (field: keyof IRegistrationForm) => (): void => {
    const errors = form.getState().errors || {};
    setError(field in errors);
  };

  const [error, setError] = useState<boolean>(false);

  return (
    <TextField
      name={item.field}
      label={item.label}
      type={item.type}
      required={item.required}
      error={error}
      onBlur={checkError(item.field)}
      value={form.getState().values[item.field]}
      onChange={handleChange(form, item.field)}
    />
  );
};
