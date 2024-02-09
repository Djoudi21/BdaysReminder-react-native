import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PATH } from "../utils/CONSTANTS.ts";
import { Home } from "../screens/Home.tsx";
import { Profile } from "../screens/Profile/Profile.tsx";

const TabStack = createBottomTabNavigator();

export function BottomTabsStack() {
  return (
    <TabStack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <TabStack.Screen name={PATH.home} component={Home} />
      <TabStack.Screen name={PATH.profile} component={Profile} />
    </TabStack.Navigator>
  );
}
