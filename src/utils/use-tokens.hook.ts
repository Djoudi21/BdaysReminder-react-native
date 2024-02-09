import { useAppSelector } from "../store/hooks.ts";
import { selectRefreshToken } from "../store/auth/authSlice.ts";

export const useTokensHook = () => {
  const refreshToken = useAppSelector(selectRefreshToken);
  const checkRefreshTokenValidity = async () => {
    try {
      // Make a request to your server to validate the refresh token
      const response = await fetch(
        `${process.env.BACKEND_API_URL}/verify-refresh-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`, // Send refresh token in the Authorization header
          },
          body: JSON.stringify({}),
        }
      );
      console.log(response);
      // if (response.ok) {
      //   // Refresh token is valid, update the state or take appropriate action
      //   setIsLoggedIn(true);
      //   // Optionally, fetch a new access token using the refresh token
      //   // const newAccessToken = await response.json();
      //   // setAccessToken(newAccessToken);
      // } else {
      //   // Refresh token is not valid, log the user out or take appropriate action
      //   setIsLoggedIn(false);
      //   setAccessToken("");
      //   setRefreshToken("");
      // }
    } catch (error) {
      console.error("Error checking refresh token validity:", error);
    }
  };

  return {
    checkRefreshTokenValidity,
  };
};
