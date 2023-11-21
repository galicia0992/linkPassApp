import {View, Text, StyleSheet, ClipboardStatic} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import getLinks from '../api/get.js';
import {Input, InputField} from '@gluestack-ui/themed';

const styles = StyleSheet.create({
  card: {
    borderStyle: 'solid',
    width: 240,
    height: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  inputContainer: {
    width: 150,
    marginVertical: 17,
  },
});

const LinksComponent = () => {
  const [listaLinks, setListaLinks] = useState<any[]>([]);
  const [copied, setCopied] = useState<String>('');

  useEffect(() => {
    getLinks(setListaLinks);
  }, []);

  return (
    <View
      style={{
        paddingBottom: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {listaLinks.map(item => {
        return (
          <View key={item.id} style={styles.card}>
            <View style={styles.inputContainer}>
              <Text style={{marginBottom: 10}}>{'Categoria'}</Text>
              <Input
                variant="underlined"
                size="sm"
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
              <Text style={{marginBottom: 10}}>{'Link'}</Text>
              <Input
                variant="outline"
                size="sm"
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
