import { Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { BaseTextInput } from "../../components/atomics/BaseTextInput.tsx";
import { useRegisterHook } from "./use-register.hook.tsx";
import FeatherIcons from "react-native-vector-icons/Feather";
import { usePasswordHook } from "../../hooks/use-password.hook.ts";
import { BaseToaster } from "../../components/atomics/BaseToaster.tsx";

export function Register({ navigation }: { navigation: string[] }) {
  const {
    control,
    errors,
    handleSubmit,
    responseError,
    onSubmit,
    navigateToLogin,
  } = useRegisterHook(navigation);
  const { isPasswordVisible, passwordIconToDisplay, handlePasswordIcon } =
    usePasswordHook();

  return (
    <SafeAreaView className={"h-screen bg-whitesmoke flex-col flex"}>
      <View className={"m-4"}>
        <Text className="text-xl text-midnightBlue my-6">Inscrivez-vous</Text>

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
                  secureTextEntry={isPasswordVisible}
                >
                  <FeatherIcons
                    onPress={handlePasswordIcon}
                    name={passwordIconToDisplay}
                    size={20}
                  />
                </BaseTextInput>
              )}
              name="password"
            />
          </View>
        </View>

        <BaseToaster message={responseError} className={"text-error"} />

        <Pressable
          className={
            "border-2 bg-purple border-solid border-lavender rounded-3xl p-4"
          }
          onPress={handleSubmit(onSubmit)}
        >
          <Text className={"text-center text-hanPurple"}>Validez</Text>
        </Pressable>
      </View>
      <View className="flex flex-row items-center my-10 justify-center">
        <Text className="text-mediumSlateBlue mr-2">Déja un compte?</Text>
        <Pressable onPress={navigateToLogin}>
          <Text className="text-lightSlateBlue">Connectez-vous</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
