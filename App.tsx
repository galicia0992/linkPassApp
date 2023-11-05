import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './views/LogIn';
import Links from './views/Links';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo';
import PassW from './views/PassW';
import Choose from './views/Choose';

const Stack = createStackNavigator();
function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen
            name="Log in"
            component={LogIn}
            options={{
              headerTitle: "",
              headerStyle: {shadowColor: 'transparent'},
            }}
          />
          <Stack.Screen
            name="Links"
            component={Links}
            options={{headerTitle: () => <Navbar  />}}
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
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
