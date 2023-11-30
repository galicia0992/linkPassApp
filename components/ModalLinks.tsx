import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import post from '../api/post';
interface Props {
  showModal: any;
  setShowModal: any;
  route:any
}

const ModalLinks = ({showModal, setShowModal, route}: Props): JSX.Element => {
  const [selectedCat, setSelectedCat] = useState<String>('');
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [errLink, setErrLink] = useState<string>('$coolGray300');
  const [showErrCat, setShowErrCat] = useState<boolean>(false);
  const [showErrLink, setShowErrLink] = useState<boolean>(false);
  const [emailPost, setEmailPost] = useState<any[]>([])
  
  useEffect(() => {
    const {email} = route.params
    setEmailPost(email)
  }, [])
  
  
  const ref = React.useRef(null);
  const catchPost = () => {
    if (selectedCat.length == 0) {
      setShowErrCat(true);
    } else {
      setShowErrCat(false);
    }
    if (linkUrl.length == 0) {
      setErrLink('$error300');
      setShowErrLink(true);
    } else {
      setErrLink('$coolGray300');
    }

    if (selectedCat !== '' && linkUrl !== '') {
      post(linkUrl, selectedCat, emailPost);
      setShowModal(false);
      setSelectedCat('');
      setLinkUrl('');
    }
  };
  return (
    <Center h={300}>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setShowErrCat(false);
          setShowErrLink(false);
          setErrLink('$coolGray300');
          setSelectedCat('');
          setLinkUrl('');
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
            <SelectP setSelectedCat={setSelectedCat} setShowErrCat={setShowErrCat}></SelectP>
            {showErrCat ? <Text style={{fontSize:10, marginTop:7, marginLeft:7}} >Ingresa una categoria</Text> : ''}
            <ModalHeader>
              <Heading size="md">Ingresa el link</Heading>
            </ModalHeader>
            <Input borderColor={errLink}>
              <InputField
                type={'text'}
                placeholder="http://google.com"
                onChangeText={value => {setLinkUrl(value), setShowErrLink(false), setErrLink('$coolGray300')}}></InputField>
            </Input>
            {showErrLink ? <Text style={{fontSize:10, marginTop:7, marginLeft:7}} >Ingresa un link</Text> : ''}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
                setShowModal(false);
                setShowErrCat(false);
                setShowErrLink(false);
                setErrLink('$coolGray300');
                setSelectedCat('');
                setLinkUrl('');
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

export default ModalLinks;
