import {Alert, AlertIcon, AlertText, InfoIcon} from '@gluestack-ui/themed';
import {useContext} from 'react';
import React, {useRef, useEffect} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
interface Props {
  showAlert: boolean;
  alertMessage: any
}
const Alerta = ({showAlert, alertMessage}: Props): JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = (): void => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (): void => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  
   useEffect(() => {
    if (showAlert == true) {
      fadeIn();
    } else {
      fadeOut();
    }
   }, [showAlert])
   
  

  return (
    <View style={{backgroundColor: 'white', position:"absolute", zIndex:1, width:"100%"}}>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
        ]}>
        <Alert mx="$2.5" action="error" variant="solid">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>{alertMessage}</AlertText>
        </Alert>
      </Animated.View>
    </View>
  );
};

export default Alerta;
