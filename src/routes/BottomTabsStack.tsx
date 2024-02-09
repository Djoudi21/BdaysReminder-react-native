import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PATH } from "../utils/CONSTANTS.ts";
import { Home } from "../screens/Home.tsx";
import { Profile } from "../screens/Profile/Profile.tsx";
import FeatherIcons from "react-native-vector-icons/Feather";

const TabStack = createBottomTabNavigator();

export function BottomTabsStack() {
  return (
    <TabStack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <TabStack.Screen
        name={PATH.home}
        component={Home}
        options={{
          title: "Rechercher",
          tabBarIcon: ({ color, size }) => (
            <FeatherIcons name={"search"} color={color} size={size} />
          ),
        }}
      />
      <TabStack.Screen
        name={PATH.profile}
        component={Profile}
        options={{
          title: "Mon compte",
          tabBarIcon: ({ color, size }) => (
            <FeatherIcons name={"user"} color={color} size={size} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}
