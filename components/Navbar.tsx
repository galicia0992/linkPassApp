import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Navbar = (): JSX.Element => {
  const navigation: any = useNavigation();
  const [butttonColorLink, setButtonColorLink] = useState('');
  const [butttonColorPass, setButtonColorPass] = useState('');

  
  const buttonLinks = (): void => {
    setButtonColorLink('#633cff43');
    navigation.navigate('Links');
  };
  const buttonPass = (): void => {
    setButtonColorPass('#633cff43');
    navigation.navigate('Passwords');
  };
  
  
  return (
    <View style={styles.navbarContainer}>
      <Pressable
        style={{
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          width: 70,
          backgroundColor: butttonColorLink,
        }}
        onPressIn={buttonLinks}
        onPressOut={() => setButtonColorLink('white')}>
        <Text>Links</Text>
      </Pressable>
      <Pressable
        style={{
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          width: 70,
          backgroundColor: butttonColorPass,
        }}
        onPressIn={buttonPass}
        onPressOut={() => setButtonColorPass('white')}>
        <Text>Pass</Text>
      </Pressable>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
  },
  navButton: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
});
