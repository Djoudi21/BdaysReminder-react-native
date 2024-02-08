import { Pressable, SafeAreaView, Text, View } from "react-native";
import { PATH } from "../../utils/CONSTANTS.ts";
import React from "react";
import BaseButton from "../../components/atomics/BaseButton.tsx";
import { Controller } from "react-hook-form";
import { BaseTextInput } from "../../components/atomics/BaseTextInput.tsx";
import { useRegisterHook } from "./use-register.hook.tsx";

export function Register({ navigation }: any) {
  const { control, errors, handleSubmit, onSubmit, onError } =
    useRegisterHook();
  return (
    <SafeAreaView className={"h-screen flex-col flex"}>
      <View
        className={"flex flex-col h-4/5 items-center justify-center w-full"}
      >
        <View className={"w-full"}>
          <Controller
            control={control}
            rules={{
              required: "Veuillez saisir votre email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "toto",
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

        <BaseButton
          label="Submit"
          handlePress={handleSubmit(onSubmit, onError)}
        />
      </View>
      <View className={"flex h-full flex-col items-center gap-2"}>
        <Text>Toujours pas de compte?</Text>
        <Pressable onPress={() => navigation.push(PATH.login)}>
          <Text>Connectez-vous</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
