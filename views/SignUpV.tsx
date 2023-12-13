import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input, InputField, Button} from '@gluestack-ui/themed';
import Alerta from '../components/Alerta';
import createUser from '../api/createUser';

const styles = StyleSheet.create({
  cardSignInContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0e7fd',
  },
  cardSignIn: {
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderColor: '#c3bbbc',
    borderRadius: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor:"white"
  },
});
interface Props{
  navigation:any
}
const Choose = ({navigation}:Props): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  return (
    <>
    <Alerta></Alerta>
    <View style={styles.cardSignInContainer}>
      <View style={styles.cardSignIn}>
        <Input
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            onChangeText={value => setEmail(value)}
            placeholder="Ingresa un email"
            keyboardType="email-address"></InputField>
        </Input>
        <Input
          marginVertical={10}
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            onChangeText={value => setPass(value)}
            placeholder="Contraseña"
            keyboardType="default"></InputField>
        </Input>
        <Button onPress={() => createUser(email, pass, navigation)}>
          <Text>alta</Text>
        </Button>
      </View>
    </View>
    </>
  );
};

export default Choose;
