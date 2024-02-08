import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { selectAuthError } from "../../store/auth/authSlice.ts";
import { login } from "../../store/auth/use-cases/login.ts";

export const useLoginHook = () => {
  const dispatch = useAppDispatch();
  const responseError = useAppSelector(selectAuthError);
  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data));
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
