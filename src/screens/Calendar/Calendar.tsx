import { SafeAreaView, Text, View } from "react-native";

export function Calendar() {
  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <Text>Calendar</Text>
      </View>
    </SafeAreaView>
  );
}
