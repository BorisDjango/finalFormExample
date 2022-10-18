import { createForm, FormApi, FormState } from "final-form";
import { useEffect, useMemo, useState } from "react";
import { IRegistrationForm } from "./interfaces";
import { validate } from "./validate";

export function useRegistrationForm(
  initialValues: IRegistrationForm,
  onSubmit: (params: IRegistrationForm) => void
): [FormApi<IRegistrationForm>, FormState<IRegistrationForm>] {
  const formInstance = useMemo(() => {
    return createForm({ initialValues, onSubmit, validate });
  }, []);

  const [formState, setFormState] = useState<FormState<IRegistrationForm>>(
    formInstance.getState()
  );

  useEffect(() => {
    return formInstance.subscribe(setFormState, {
      values: true,
      errors: true,
      hasValidationErrors: true,
      hasSubmitErrors: true,
      dirty: true,
      dirtySinceLastSubmit: true,
      dirtyFieldsSinceLastSubmit: true,
      submitting: true,
      submitFailed: true,
    });
  }, [formInstance]);
  return [formInstance, formState];
}
