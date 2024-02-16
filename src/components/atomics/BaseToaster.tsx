import { StyleSheet, Text, View, ViewProps } from "react-native";
import { useToasterHook } from "../../hooks/use-toaster.hook.ts";
import { ReactNode } from "react";

interface Props extends ViewProps {
  message: string;
  children?: ReactNode;
}
export function BaseToaster({ message, children, ...rest }: Props) {
  const { displayToaster } = useToasterHook();
  const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#212121", // Darker shadow color
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    },
  });

  return message.length > 0 && displayToaster ? (
    <View
      className={
        "absolute p-4 w-full flex flex-row items-center justify-center rounded-lg bg-bright"
      }
      style={styles.shadow}
      {...rest}
    >
      {children}
      <Text className={"text-error ml-2 text-center"}>{message}</Text>
    </View>
  ) : null;
}
