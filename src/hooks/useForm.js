import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidationStatus, setFormValidationStatus] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    const errorMessageExists = Object.values(formValidationStatus).find(
      (value) => value !== null
    );

    return !errorMessageExists;
  }, [formValidationStatus]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMesage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMesage;

      setFormValidationStatus(formCheckedValues);
    }
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidationStatus,
    formValidationStatus,

    isFormValid,
  };
};
