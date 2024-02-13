import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { register } from "../../store/auth/use-cases/register/register.ts";
import { selectAuthError } from "../../store/auth/authSlice.ts";
import { NewUser } from "../../store/auth/use-cases/register/types.ts";

export const useRegisterHook = () => {
  const dispatch = useAppDispatch();
  const responseError = useAppSelector(selectAuthError);
  const onSubmit = (data: NewUser) => {
    dispatch(register(data));
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
    responseError,
  };
};
