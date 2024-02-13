import { Pressable, SafeAreaView, Text, View } from "react-native";
import { PATH } from "../../utils/CONSTANTS.ts";
import React from "react";
import BaseButton from "../../components/atomics/BaseButton.tsx";
import { Controller } from "react-hook-form";
import { BaseTextInput } from "../../components/atomics/BaseTextInput.tsx";
import { useLoginHook } from "./use-login.hook.tsx";

export function Login({ navigation }: any) {
  const { control, errors, handleSubmit, responseError, onSubmit } =
    useLoginHook();

  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <View className={"w-full flex flex-col gap-4 items-center"}>
          <View className={"w-full flex flex-col items-center"}>
            <Controller
              control={control}
              rules={{
                required: "Veuillez saisir votre email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Veuillez saisir un email valide",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <BaseTextInput
                  placeholder="email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email}
                  name={"email"}
                />
              )}
              name="email"
            />
          </View>
          <View className={"w-full flex flex-col items-center"}>
            <Controller
              control={control}
              rules={{
                required: "Veuillez saisir votre mot de passe",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <BaseTextInput
                  placeholder="mot de passe"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password}
                  name={"password"}
                />
              )}
              name="password"
            />
          </View>
        </View>

        <Text className={"text-error"}>
          {responseError.length > 0 && responseError}
        </Text>

        <BaseButton label="Submit" handlePress={handleSubmit(onSubmit)} />
      </View>
      <View className={"flex h-full flex-col gap-2 items-center"}>
        <Text>Toujours pas de compte?</Text>
        <Pressable onPress={() => navigation.push(PATH.register)}>
          <Text>Inscrivez-vous</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
