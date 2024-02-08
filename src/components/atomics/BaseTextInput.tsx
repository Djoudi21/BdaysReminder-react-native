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

    return (
      <View className={"flex flex-col justify-center gap-4 w-full"}>
        {label && <Text className={`${labelStyle}`}>{label}</Text>}
        <TextInput
          autoCapitalize="none"
          ref={ref}
          className={"border border-solid border-primary rounded-md px-4 py-2"}
          {...inputProps}
        />
        <Text className={"text-[#cb0505]"}>{error && error.message}</Text>
      </View>
    );
  }
);
