import { StyleSheet, Text, View, ViewProps } from "react-native";
import { useToasterHook } from "../../hooks/use-toaster.hook.ts";

interface Props extends ViewProps {
  message: string;
}
export function BaseToaster({ message, ...rest }: Props) {
  const { displayToaster } = useToasterHook();
  const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#212121", // Darker shadow color
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.6,
      shadowRadius: 7,
      elevation: 6,
    },
  });

  return message.length > 0 && displayToaster ? (
    <View
      className={"absolute p-4 rounded-lg bg-bright"}
      style={styles.shadow}
      {...rest}
    >
      <Text>{message}</Text>
    </View>
  ) : null;
}
