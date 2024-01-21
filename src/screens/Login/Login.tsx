import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { PATH } from '../../utils/CONSTANTS.ts';

export function Login({ navigation }: any) {
  return (
    <SafeAreaView className={'h-screen'}>
      <Text>Login</Text>
      <View>
        <Text>Toujours pas de compte?</Text>
        <Pressable onPress={() => navigation.push(PATH.register)}>
          <Text>Inscrivez-vous</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
