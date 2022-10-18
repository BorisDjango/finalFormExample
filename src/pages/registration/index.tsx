import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import { fieldsStep1, fieldsStep2, fieldsStep3 } from "./data";
import { FormItems } from "./FormItems";
import { User } from "./User.class";

function Registration() {
  const [form, formState] = useRegistrationForm(new User(), (val) =>
    console.log("Form submited with params: ", val)
  );

  const [codeValid, setCodeValid] = useState<boolean>(false);

  const [step, setStep] = useState<number>(1);

  let fields = [];

  switch (step) {
    case 2:
      fields = fieldsStep2;
      break;

    case 3:
      fields = fieldsStep3;
      break;

    default:
      fields = fieldsStep1;
  }

  const handleChangeCode = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // if (code && code === event.target.value) {
    //   form.submit();
    // }
    setCodeValid(true);
  };

  /**
   * проверяем валидность перехода на следующую страницу
   * @returns
   */
  const checkNextDisabled = (): boolean => {
    const isContainstErrors =
      Object.keys(form.getState().errors || {}).length > 0;
    const isLastStep = step >= 3;
    return isContainstErrors || isLastStep;
  };

  const checkPrevDisabled = (): boolean => {
    return step <= 1;
  };

  const changeStep = (delta: number) => () => {
    const nextStep = step + delta;
    if (nextStep < 0) {
      setStep(0);
      return;
    }
    if (nextStep > 3) {
      setStep(3);
      return;
    }
    setStep(nextStep);
  };

  return (
    <>
      <FormItems form={form} fields={fields}>
        {step === 3 && (
          <>
            <Button>Get code</Button>
            <TextField onChange={handleChangeCode} />
          </>
        )}
      </FormItems>
      <Button onClick={changeStep(-1)} disabled={checkPrevDisabled()}>
        prevStep
      </Button>
      <Button onClick={changeStep(1)} disabled={checkNextDisabled()}>
        nextStep
      </Button>
      {step === 3 && (
        <Button
          disabled={!codeValid}
          onClick={() => {
            form.submit();
          }}
        >
          Save
        </Button>
      )}
    </>
  );
}

export default Registration;
