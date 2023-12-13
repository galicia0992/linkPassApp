import {StyleSheet, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

const NavbarPass = (): JSX.Element => {
  const navigation: any = useNavigation();
  const [butttonColorLink, setButtonColorLink] = useState<string>("#192BC2");
  const [butttonColorPass, setButtonColorPass] = useState<string>('');
  const [colorLink, setColorLink] = useState<boolean>(true)
  const [colorPass, setColorPass] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  
  const buttonLinks = (): void => {

    navigation.navigate('Links');
  };
  const buttonPass = (): void => {
    
    navigation.navigate('Passwords');
  };
  
  
  
  return (
      <TabBar
      style={{width:250}}
      selectedIndex={selectedIndex}
    >
      <Tab title='Links'
      onPressIn={buttonLinks}
      />
      <Tab title='Passwords' 
      onPressIn={buttonPass}
      />
    </TabBar>
    
  );
};

export default NavbarPass;

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  navButton: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
});
