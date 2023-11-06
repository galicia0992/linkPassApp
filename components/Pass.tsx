import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import Wave from 'react-native-waves';
import {FIREBASE_AUTH} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: 'white',
  },
  font: {
    fontFamily: 'InstrumentSans-Regular',
  },
});
interface Props {
  navigation: any;
  setShowAlert: any;
  setAlertMessage: any;
}
const Pass = ({
  navigation,
  setShowAlert,
  setAlertMessage,
}: Props): JSX.Element => {
  const [pass, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const logIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, pass);
      navigation.navigate('Choose');
    } catch (error: any) {
      setAlertMessage('Error al iniciar sesion ' + error.message);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } finally {
      setLoading(false);
      setPassword('');
      setEmail('');
    }
  };

  return (
    <>
      <View style={styles.frame}>
        <Wave placement="bottom" speed={20} maxPoints={8} delta={30} />
        <Wave placement="bottom" gap={20} color="#003d66"></Wave>
        <Input
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          marginBottom={10}>
          <InputField
            type={'text'}
            placeholder="Ingresa tu email"
            onChangeText={val => setEmail(val)}
            value={email}
            keyboardType="email-address"
            style={styles.font}
          />
        </Input>
        <Input
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            type={'password'}
            placeholder="Ingresa password"
            onChangeText={val => setPassword(val)}
            value={pass}
            keyboardType="default"
            style={styles.font}
          />
        </Input>
        {loading ? (
          <Button
            marginVertical={30}
            isDisabled={true}
            bg="#633CFF"
            width={250}
            size="xl"
            p="$3">
            <ButtonSpinner mr="$1" color={'white'} />
            <ButtonText style={styles.font} color="white">
              Please wait...
            </ButtonText>
          </Button>
        ) : (
          <>
            <Button
              marginVertical={30}
              width={250}
              backgroundColor="#633CFF"
              size="xl"
              variant="outline"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              onPress={() => logIn()}>
              <ButtonText style={styles.font} color="white">
                Log In
              </ButtonText>
            </Button>
          </>
        )}
      </View>
    </>
  );
};

export default Pass;
