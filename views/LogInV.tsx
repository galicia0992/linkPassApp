import React, {createContext, useState} from 'react';
import Pass from '../components/Pass';
import {useNavigation} from '@react-navigation/native';
import Alerta from '../components/Alerta';
import { KeyboardAvoidingView } from '@gluestack-ui/themed';
import { Platform } from 'react-native';

const LogInV = (): JSX.Element => {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  return (
    <>
      <Alerta
      showAlert={showAlert}
      alertMessage={alertMessage}
      ></Alerta>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding":"height"}
      style={{flex:1}}
      >
      <Pass
        navigation={navigation}
        setShowAlert={setShowAlert}
        setAlertMessage={setAlertMessage}
        ></Pass>
      </KeyboardAvoidingView>
    </>
  );
};

export default LogInV;
