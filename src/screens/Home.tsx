import { SafeAreaView, Text, View } from "react-native";
import { useAppSelector } from "../store/hooks.ts";
import { selectCurrentUser } from "../store/auth/authSlice.ts";
import BaseButton from "../components/atomics/BaseButton.tsx";
import { PATH } from "../utils/CONSTANTS.ts";

export function Home({ navigation }: any) {
  const user = useAppSelector(selectCurrentUser);
  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <Text>Home</Text>
        <Text>{`hello ${user.email}`}</Text>
        <BaseButton
          handlePress={() => navigation.push(PATH.help)}
          label={"Modal"}
        />
      </View>
    </SafeAreaView>
  );
}
