import { ValidationErrors } from "final-form";
import { IRegistrationForm } from "./interfaces";

const REQUIRED_FIELD = "field is required";

export const validate = (
  values: IRegistrationForm
): Partial<IRegistrationForm> => {
  let errors: Partial<IRegistrationForm> = {};

  if (!values.login) {
    errors.login = REQUIRED_FIELD;
  }
  if (!values.email) {
    errors.email = REQUIRED_FIELD;
  }

  return errors;
};
