import React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, InputField, InputSlot, InputIcon} from '@gluestack-ui/themed';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import LogIn from './LogIn';
import SignUp from './SignUp';
const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor:"white"
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
const Pass = ({navigation,setShowAlert,setAlertMessage}: Props): JSX.Element => {
  const [pass, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showPasswordState = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  return (
    
      <View style={styles.frame}>
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Ingresa password"
            onChangeText={val => setPassword(val)}
            value={pass}
            keyboardType="default"
            style={styles.font}
          />
          <InputSlot pr="$3" onPress={showPasswordState}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color="$darkBlue500"
            />
          </InputSlot>
        </Input>
        <LogIn
          navigation={navigation}
          setShowAlert={setShowAlert}
          setAlertMessage={setAlertMessage}
          pass={pass}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}></LogIn>
          <SignUp></SignUp>
      </View>
    
  );
};

export default Pass;
