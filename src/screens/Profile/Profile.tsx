import { Pressable, SafeAreaView, Text, View } from "react-native";
import { useProfileHook } from "./use-profile.hook.tsx";
import React from "react";

export function Profile() {
  const { handleSubmit } = useProfileHook();
  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <Text>Profile</Text>
        <Pressable
          className={
            "border-2 bg-purple border-solid border-lavender rounded-3xl p-2"
          }
          onPress={handleSubmit}
        >
          <Text className={"text-center text-hanPurple"}>Déconnexion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
