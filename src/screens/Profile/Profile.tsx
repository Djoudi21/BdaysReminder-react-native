import { SafeAreaView, Text, View } from "react-native";
import BaseButton from "../../components/atomics/BaseButton.tsx";
import { useProfileHook } from "./use-profile.hook.tsx";

export function Profile() {
  const { handleSubmit } = useProfileHook();
  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <Text>Profile</Text>
        <BaseButton label={"Deconnexion"} handlePress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
