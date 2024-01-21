import { Pressable, SafeAreaView, Text, View } from "react-native";
import { PATH } from "../../utils/CONSTANTS.ts";

export function Register({ navigation }: any) {
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <View>
        <Text>Toujours pas de compte?</Text>
        <Pressable onPress={() => navigation.push(PATH.login)}>
          <Text>Connectez-vous</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
