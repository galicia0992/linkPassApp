import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  Modal,
  Center,
  Button,
  ButtonText,
  ModalFooter,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Heading,
  ClockIcon,
  Icon,
  CloseIcon,
  InputField,
  Input,
} from '@gluestack-ui/themed';
import SelectPPass from './SelectPPass';
import postPass from '../api/postPass';
interface Props {
  showModal: any;
  setShowModal: any;
}

const ModalPass = ({showModal, setShowModal}: Props): JSX.Element => {
  const [selectedCat, setSelectedCat] = useState<String>('');
  const [password, setPassword] = useState<string>('');
  const [errLink, setErrLink] = useState<string>('');

  const ref = React.useRef(null);
  const catchPost = () => {
    setSelectedCat('');
    setPassword('');
    if (selectedCat == '' || password == '') {
      setErrLink('$error300');
      console.log('te falta algo');
    } else {
      postPass(password, selectedCat);
      setShowModal(false);
      setErrLink('$coolGray300');
    }
  };
  return (
    <Center h={300}>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalBody>
            <ModalHeader>
              <Heading size="md">Selecciona la categoria</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <SelectPPass setSelectedCat={setSelectedCat}></SelectPPass>
            <ModalHeader>
              <Heading size="md">Ingresa el password</Heading>
            </ModalHeader>
            <Input borderColor={errLink}>
              <InputField
                type={'text'}
                placeholder="Ingrese password"
                onChangeText={value => setPassword(value)}></InputField>
            </Input>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
                setErrLink('$coolGray300');
              }}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                catchPost();
              }}>
              <ButtonText>Guardar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalPass;
