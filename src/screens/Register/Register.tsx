import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {PATH} from '../../utils/CONSTANTS.routeS.ts';

export function Register({navigation}: any) {
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <View>
        <Text>oujours pas de compte?</Text>
        <Pressable onPress={() => navigation.push(PATH.login)}>
          <Text>Connectez-vous</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
