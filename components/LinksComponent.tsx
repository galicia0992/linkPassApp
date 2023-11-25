import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import getLinks from '../api/get.js';
import getLinksToRemove from '../api/getToRemove.js';
import {Input, InputField} from '@gluestack-ui/themed';
import ModalLinksDelete from './ModalLinksDelete';

const styles = StyleSheet.create({
  card: {
    borderStyle: 'solid',
    borderRadius:10,
    width: "96%",
    height: 'auto',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems:"center",
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
    paddingTop:10
  },
  inputContainer: {
    width: 200,
    marginVertical: 17,
  },
  headCard:{
    flexDirection:"row",
    alignItems:"center",
    with:"100%",
    justifyContent:"space-between",
    marginBottom:20
  }
});

const LinksComponent = () => {
  const [listaLinks, setListaLinks] = useState<any[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<Boolean>(false)
  const [idListas, setIdListas] = useState<any[]>([])
  const [keyList, setKeyList] = useState<number>(0)
  useEffect(() => {
    getLinks(setListaLinks);
    getLinksToRemove(setIdListas)
  }, []);
  
  
  return (
    <View
      style={{
        paddingBottom: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{position:"absolute"}}>
        {
          showModalDelete ? <ModalLinksDelete
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
          idListas={idListas}
          keyList={keyList}
          ></ModalLinksDelete>:""
        }
        </View>
      {listaLinks.map((item, i) => {
        return (
          <View key={i} style={styles.card}>
            <View style={styles.inputContainer}>
            <View style={styles.headCard}>
                <Text style={{fontSize:10}}>{`Link id: ${item.id}`}</Text>
                <Pressable
                onPress={() => (setShowModalDelete(true), setKeyList(i))}
                ><Text>Remover</Text></Pressable>
            </View>
              <Text style={{marginBottom: 10, fontSize:10}}>{'Categoria'}</Text>
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
              <Text style={{marginBottom: 10, fontSize:10}}>{'Link'}</Text>
              <Input
                variant="outline"
                size="sm"
                borderRadius={6}
                w={200}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField
                  placeholder="Enter Text here"
                  value={`${item.link}`}
                />
              </Input>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default LinksComponent;
