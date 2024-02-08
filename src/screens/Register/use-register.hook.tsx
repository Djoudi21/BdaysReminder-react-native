import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { register } from "../../store/auth/use-cases/register.ts";
import { selectRegisterError } from "../../store/auth/authSlice.ts";

export const useRegisterHook = () => {
  const dispatch = useAppDispatch();
  const responseError = useAppSelector(selectRegisterError);
  const onSubmit = (data: { email: string; password: string }) => {
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
