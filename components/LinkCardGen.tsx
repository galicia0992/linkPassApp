import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, ButtonText, ButtonIcon, AddIcon} from '@gluestack-ui/themed';

const styles = StyleSheet.create({
  linksContainer: {
    marginTop: 40,
  },
});
interface Props {
  setShowModal: any;
}
const LinkCardGen = ({setShowModal}: Props): JSX.Element => {
  const [buttonPressBackground, setButtonPressBackground] = useState('white');
  const [buttoTextColor, setButtonTextColor] = useState('#633CFF');

  const buttonFX = (fx: string): void => {
    setButtonPressBackground(fx);
    setShowModal(true);

    if (fx == '#633CFF') {
      setButtonTextColor('white');
    } else {
      setButtonTextColor('#633CFF');
    }
  };
  return (
    <View style={styles.linksContainer}>
      <Button
        marginTop={19}
        size="md"
        variant="outline"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        w={280}
        h={46}
        backgroundColor={buttonPressBackground}
        borderRadius={13}
        onPressIn={() => {
          buttonFX('#633CFF');
        }}
        onPressOut={() => {
          buttonFX('white');
        }}>
        <ButtonIcon as={AddIcon} color={buttoTextColor} />
        <ButtonText color={buttoTextColor}>Añade un nuevo link</ButtonText>
      </Button>
    </View>
  );
};

export default LinkCardGen;
