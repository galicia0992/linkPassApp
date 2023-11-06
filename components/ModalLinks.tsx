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
} from '@gluestack-ui/themed';

interface Props {
  showModal: any;
  setShowModal: any;
}

const ModalLinks = ({showModal, setShowModal}: Props): JSX.Element => {
  console.log(showModal + 'jjaja');
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
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
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
              }}>
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalLinks;

const styles = StyleSheet.create({});
