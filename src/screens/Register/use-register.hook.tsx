import { FieldErrors, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks.ts";
import { register } from "../../store/auth/use-cases/register.ts";

export const useRegisterHook = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (data: { email: string; password: string }) =>
    console.log("DATA", data);
  dispatch(register({ email: "a@a.com", password: "zer", name: "name" }));

  const onError = (errors: FieldErrors) => {
    console.log("ERRORS", errors.email);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    onError,
  };
};
