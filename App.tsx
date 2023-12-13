import 'react-native-gesture-handler';
import React, {createContext} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { EmailProvider } from './context/context';
import LogInV from './views/LogInV';
import Links from './views/Links';
import NavbarLinks from './components/NavbarLinks';
import NavbarPass from './components/NavbarPass';
import SignUp from './views/SignUpV';
import PassW from './views/PassW';
import Choose from './views/Choose';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createStackNavigator();
function App(): JSX.Element {
  
  
  return (
        <EmailProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
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
                options={{headerTitle: () => <NavbarLinks />}}
              />
              <Stack.Screen
                name="Passwords"
                component={PassW}
                options={{headerTitle: () => <NavbarPass />}}
              />
              <Stack.Screen name="Sign up" component={SignUp} />
            </Stack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
          </ApplicationProvider>
        </EmailProvider>
      
  );
}

export default App;
