import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import getLinksToRemove from '../api/getToRemove.js';
import {Input, InputField, InputSlot, InputIcon} from '@gluestack-ui/themed';
import ModalPassDelete from './ModalPassDelete';
import getPass from '../api/getPass.js';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import { useEmailContext } from '../context/context.jsx';

const styles = StyleSheet.create({
  card: {
    borderStyle: 'solid',
    borderRadius: 10,
    width: '96%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#FFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.27,
    elevation: 10,
    paddingTop: 10,
  },
  inputContainer: {
    width: 200,
    marginVertical: 17,
  },
  headCard: {
    flexDirection: 'row',
    alignItems: 'center',
    with: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

const PasswordsComponent = () => {
  const [listaPass, setListaPass] = useState<any[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<Boolean>(false);
  const [idListas, setIdListas] = useState<any[]>([]);
  const [keyList, setKeyList] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const emailPass = useEmailContext()

  const showPasswordState = () => {
    showPassword ? setShowPassword(false):setShowPassword(true);
  };
  useEffect(() => {
    getPass(setListaPass, emailPass.replace(/\./g, '1'));
    getLinksToRemove(setIdListas, emailPass.replace(/\./g, '1'), 1);
  }, []);

  return (
    <View
      style={{
        paddingBottom: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{position: 'absolute'}}>
        {showModalDelete ? (
          <ModalPassDelete
            showModalDelete={showModalDelete}
            setShowModalDelete={setShowModalDelete}
            idListas={idListas}
            keyList={keyList}></ModalPassDelete>
        ) : (
          ''
        )}
      </View>
      {listaPass.map((item, i) => {
        return item.category == '' ? (
          ''
        ) : (
          <View key={i} style={styles.card}>
            <View style={styles.inputContainer}>
              <View style={styles.headCard}>
                <Text style={{fontSize: 10}}>{`Link id: ${item.id}`}</Text>
                <Pressable
                  onPress={() => (setShowModalDelete(true), setKeyList(i))}>
                  <Text>Remover</Text>
                </Pressable>
              </View>
              <Text style={{marginBottom: 10, fontSize: 10}}>
                {'Categoria'}
              </Text>
              <Input
                variant="underlined"
                size="sm"
                w={200}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={true}>
                <InputField
                  placeholder="Enter Text here"
                  value={`${item.category}`}
                />
              </Input>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{marginBottom: 10, fontSize: 10}}>{'Usuario'}</Text>
              <Input
                variant="underlined"
                size="sm"
                borderRadius={6}
                w={200}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField
                showSoftInputOnFocus={false}
                  placeholder="Enter Text here"
                  value={`${item.user}`}
                />
              </Input>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{marginBottom: 10, fontSize: 10}}>{'Password'}</Text>
              <Input
                variant="outline"
                size="sm"
                borderRadius={6}
                w={200}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField
                showSoftInputOnFocus={false}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Text here"
                  value={`${item.pass}`}
                />
                <InputSlot pr="$3" onPress={showPasswordState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PasswordsComponent;
