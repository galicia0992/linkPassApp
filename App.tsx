import 'react-native-gesture-handler';
import React, {createContext, useState} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useContext} from 'react';
import { EmailProvider } from './context/context';
import LogInV from './views/LogInV';
import Links from './views/Links';
import Navbar from './components/Navbar';
import SignUp from './views/SignUpV';
import PassW from './views/PassW';
import Choose from './views/Choose';

const Stack = createStackNavigator();
export const userContext = createContext('');
export const emailPassContext = createContext('');
function App(): JSX.Element {
  
  
  return (
        <EmailProvider>
          <GluestackUIProvider config={config}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn">
              <Stack.Screen
                name="Log in"
                component={LogInV}
                options={{
                  headerTitle: '',
                  headerStyle: {shadowColor: 'transparent'},
                }}
              />
              <Stack.Screen
                name="Links"
                component={Links}
                options={{headerTitle: () => <Navbar />}}
              />
              <Stack.Screen
                name="Passwords"
                component={PassW}
                options={{headerTitle: () => <Navbar />}}
              />
              <Stack.Screen
                name="Choose"
                component={Choose}
                options={{headerTitle: () => <Navbar />}}
              />
              <Stack.Screen name="Sign up" component={SignUp} />
            </Stack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
        </EmailProvider>
      
  );
}

export default App;
