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
import remover from '../api/remove';

interface Props {
  showModalDelete: any;
  setShowModalDelete: any;
  removeId:any
}

const ModalLinksDelete = ({showModalDelete, setShowModalDelete, removeId}: Props): JSX.Element => {
 
  console.log(removeId)
  const ref = React.useRef(null);

  return (
    <Center h={300}>
      <Modal
        isOpen={showModalDelete}
        onClose={() => {
          setShowModalDelete(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
        <ModalHeader>
            <Heading size="lg">¿Deseas eliminar el link?</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>Una vez eliminado, este no se podra recuperar</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModalDelete(false);
              }}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModalDelete(false),
                remover(removeId)
              }}>
              <ButtonText>Eliminar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalLinksDelete;


