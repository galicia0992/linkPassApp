import React, {createContext, useState} from 'react';
import Pass from '../components/Pass';
import {useNavigation} from '@react-navigation/native';
import Alerta from '../components/Alerta';
import { useContext } from 'react';

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
      <Pass
        navigation={navigation}
        setShowAlert={setShowAlert}
        setAlertMessage={setAlertMessage}
        ></Pass>
    </>
  );
};

export default LogInV;