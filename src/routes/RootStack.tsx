import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { selectIsLoggedIn } from "../store/auth/authSlice.ts";
import { Login } from "../screens/Login/Login.tsx";
import { Register } from "../screens/Register/Register.tsx";
import { Help } from "../screens/Help.tsx";
import { PATH } from "../utils/CONSTANTS.ts";
import { BottomTabsStack } from "./BottomTabsStack.tsx";

const RootStack = createNativeStackNavigator();

export function RootStackRouter() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <RootStack.Navigator>
      {isLoggedIn ? (
        // Screens for logged in user
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={PATH.root} component={BottomTabsStack} />
        </RootStack.Group>
      ) : (
        // Auth screens
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={PATH.login} component={Login} />
          <RootStack.Screen name={PATH.register} component={Register} />
        </RootStack.Group>
      )}
      {/* Common modal screens */}
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name={PATH.help} component={Help} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
