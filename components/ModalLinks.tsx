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
import SelectP from './SelectP';
import post  from '../api/post';
interface Props {
  showModal: any;
  setShowModal: any;
}

const ModalLinks = ({showModal, setShowModal}: Props): JSX.Element => {
  const [selectedCat, setSelectedCat] = useState<String>("")
  const [linkUrl, setLinkUrl] = useState<string>("")
  console.log(selectedCat)
  console.log(linkUrl)
  
  const ref = React.useRef(null);

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
            <SelectP
            setSelectedCat={setSelectedCat}
            ></SelectP>
            <ModalHeader>
              <Heading size="md">Ingresa el link</Heading>
            </ModalHeader>
            <Input>
              <InputField type={'text'} placeholder="http://google.com" onChangeText={value => setLinkUrl(value)}></InputField>
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
              }}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
                post(linkUrl, selectedCat)
              }}>
              <ButtonText>Guardar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalLinks;

const styles = StyleSheet.create({});
