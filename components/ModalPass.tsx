import React, {useState, useRef} from 'react';
import {Text} from 'react-native';
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
  const [user, setUser] = useState<string>('');
  const [errPass, setErrPass] = useState<string>('$coolGray300');
  const [errUser, setErrUser] = useState<string>('$coolGray300');
  const [showErrCat, setShowErrCat] = useState<boolean>(false);
  const [showErrUser, setShowErrUser] = useState<boolean>(false);
  const [showErrPass, setShowErrPass] = useState<boolean>(false);

  const ref = React.useRef(null);
  const catchPost = () => {
    if (selectedCat.length == 0) {
      setShowErrCat(true);
    } else {
      setShowErrCat(false);
    }
    if (user.length == 0) {
      setErrUser('$error300');
      setShowErrUser(true)
    } else {
      setErrUser('$coolGray300');
    }
    if (password.length == 0) {
      setErrPass('$error300');
      setShowErrPass(true)
    } else {
      setErrPass('$coolGray300');
    }
    if (selectedCat !== '' && user !== '' && password !== '') {
      postPass(password, selectedCat, user);
      setShowModal(false);
      setSelectedCat('');
      setPassword('');
      setUser('');
    }
  };
  return (
    <Center h={300}>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setErrPass('$coolGray300');
          setErrUser('$coolGray300');
          setShowErrCat(false);
          setSelectedCat('');
          setPassword('');
          setUser('');
          setShowErrUser(false)
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
            <SelectPPass setSelectedCat={setSelectedCat} setShowErrCat={setShowErrCat}></SelectPPass>
            {showErrCat ? <Text style={{fontSize:10, marginTop:7, marginLeft:7}} >Ingresa una categoria</Text> : ''}
            <ModalHeader>
              <Heading size="md">Ingresa el usuario</Heading>
            </ModalHeader>
            <Input borderColor={errUser}>
              <InputField
                type={'text'}
                placeholder="Ingrese el usuario"
                onChangeText={value => {setUser(value); setErrUser('$coolGray300'); setShowErrUser(false);}}></InputField>
            </Input>
            {showErrUser ? <Text style={{fontSize:10, marginTop:7, marginLeft:7}} >Ingresa un usuario</Text> : ''}
            <ModalHeader>
              <Heading size="md">Ingresa el password</Heading>
            </ModalHeader>
            <Input borderColor={errPass}>
              <InputField
                type={'text'}
                placeholder="Ingrese password"
                onChangeText={value => {setPassword(value); setErrPass('$coolGray300'); setShowErrPass(false);}}></InputField>
            </Input>
            {showErrPass ? <Text style={{fontSize:10, marginTop:7, marginLeft:7}} >Ingresa un password</Text> : ''}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
                setErrUser('$coolGray300');
                setErrPass('$coolGray300');
                setShowErrCat(false);
                setSelectedCat('');
                setPassword('');
                setUser('');
                setShowErrUser(false)
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
