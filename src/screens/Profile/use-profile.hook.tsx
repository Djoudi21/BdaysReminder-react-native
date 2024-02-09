import { useAppDispatch } from "../../store/hooks.ts";
import { logout } from "../../store/auth/use-cases/logout.ts";

export const useProfileHook = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(logout());
  };

  return {
    handleSubmit,
  };
};
