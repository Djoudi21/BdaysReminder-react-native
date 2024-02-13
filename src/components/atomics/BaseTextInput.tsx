import * as React from "react";
import { forwardRef } from "react";
import { Text, TextInput, TextInputProps, TextStyle, View } from "react-native";
import { FieldError } from "react-hook-form";

interface Props extends TextInputProps {
  name: string;
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
}
export const BaseTextInput = forwardRef<TextInput, Props>(
  (props: Props, ref) => {
    const { label, labelStyle, error, ...inputProps } = props;
    const borderStyle = () => {
      return error
        ? "border border-solid border-error"
        : "border border-solid border-lavender";
    };
    return (
      <View className={"w-full gap-2"}>
        <View
          className={`${borderStyle()} rounded-3xl px-4 h-10 w-full flex items-center justify-center flex-col`}
        >
          {label && <Text className={`${labelStyle}`}>{label}</Text>}
          <TextInput
            autoCapitalize="none"
            ref={ref}
            className={"w-full h-full"}
            {...inputProps}
          />
        </View>
        <Text className={"text-error pl-4"}>{error && error.message}</Text>
      </View>
    );
  }
);
