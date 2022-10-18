import { IFormField } from "./FormItems";

export const fieldsStep1: IFormField[] = [
  {
    field: "login",
    required: true,
    label: "Login",
    type: "text",
  },
  {
    field: "email",
    required: true,
    label: "Email",
    type: "text",
  },
  {
    field: "password",
    required: false,
    label: "password",
    type: "password",
  },
  {
    field: "password2",
    required: false,
    label: "password2",
    type: "password",
  },
];

export const fieldsStep2: IFormField[] = [
  {
    field: "country",
    required: false,
    label: "Country",
    type: "text",
  },
  {
    field: "city",
    required: false,
    label: "City",
    type: "text",
  },
  {
    field: "street",
    required: false,
    label: "Street",
    type: "text",
  },
  {
    field: "house",
    required: false,
    label: "House",
    type: "text",
  },
];

export const fieldsStep3: IFormField[] = [
  {
    field: "phone",
    required: false,
    label: "Your Phone",
    type: "text",
  },
];
