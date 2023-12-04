import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, ButtonText, ButtonSpinner} from '@gluestack-ui/themed';
import {useState} from 'react';
import {FIREBASE_AUTH} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {userContext} from '../App';
import { emailPassContext } from '../App';
import {useContext} from 'react';
import { useSetEmailContext } from '../context/context';

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
  pass: any;
  setPassword: any;
  email: any;
  setEmail: any;
  setEmailPass: any;
}
const LogIn = ({
  navigation,
  setShowAlert,
  setAlertMessage,
  pass,
  setPassword,
  email,
  setEmail
}: Props): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const setEmailPass = useSetEmailContext()
  
  const auth = FIREBASE_AUTH;

  const logIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, pass);
      setEmailPass(email);
      navigation.navigate('Links', {email});
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
            size="xl"
            variant="outline"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => logIn()}>
            <ButtonText style={styles.font} color="$primary300">
              Log In
            </ButtonText>
          </Button>
        </>
      )}
    </>
  );
};

export default LogIn;
