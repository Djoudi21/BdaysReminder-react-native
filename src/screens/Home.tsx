import { SafeAreaView, Text, View } from "react-native";

export function Home() {
  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
