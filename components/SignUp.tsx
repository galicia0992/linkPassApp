import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, ButtonText, ButtonSpinner} from '@gluestack-ui/themed';
import { useState } from 'react';
import {FIREBASE_AUTH} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

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
  type Props = {
    navigate: any;
    navigation: any;
  }
const SignUp = (): JSX.Element => {
  const navigation = useNavigation<Props>();
    const [loading, setLoading] = useState<boolean>(false);
    const signUp = (): void => {
          navigation.navigate('Sign up');
      };
  return (
    <>
      {loading ? (
        <Button
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
            width={250}
            backgroundColor="#633CFF"
            size="xl"
            variant="outline"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => signUp()}>
            <ButtonText style={styles.font} color="white">
              Sign Up
            </ButtonText>
          </Button>
        </>
      )}
    </>
  );
};

export default SignUp;
