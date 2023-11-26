import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';
import PassCardGen from '../components/LinkCardGen';
import ModalLinks from '../components/ModalLinks';
import {ScrollView, Box} from '@gluestack-ui/themed';
import PasswordsComponent from '../components/PasswordsComponent';
import getLinks from '../api/get.js';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '98%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop:10,
    paddingHorizontal:10
  },
  textHeader: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  textDescription: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: 'grey',
    lineHeight: 23,
  },
  logo: {
    width: 66,
    height: 58,
  },
  boxNewLink: {
    marginTop: 60,
    backgroundColor: '#b6aaaa1a',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 340,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  inicia: {
    fontWeight: 'bold',
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 28,
  },
  font: {
    fontFamily: 'InstrumentSans-Regular',
    color: 'grey',
  },
});

const PassW = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [listaLinks, setListaLinks] = useState<any[]>([]);
  
  useEffect(() => {
    getLinks(setListaLinks)
  }, [])
  

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.textHeader}>Almacen de passwords</Text>
          <Text style={styles.textDescription}>
            Guarda/elimina tus passwords en la seccion inferior. los passwords que
            elimines no las podras recuperar
          </Text>
        </View>
        <PassCardGen setShowModal={setShowModal}></PassCardGen>
        {listaLinks.length == 1 ? (
          <Box style={styles.boxNewLink}>
            <Image
              style={styles.logo}
              source={require('../img/booking.png')}></Image>
            <Text style={styles.inicia}>Inicia desde aqui</Text>
            <Text style={styles.font}>
              Usa el boton "Añade un nuevo password" para iniciar. una vez que
              tengas un Link, podras editarlo.{' '}
            </Text>
          </Box>
        ) : (
          <ScrollView style={{width:"90%"}}>
            <PasswordsComponent></PasswordsComponent>
          </ScrollView>
        )}
      </View>
      <ModalLinks
        setShowModal={setShowModal}
        showModal={showModal}></ModalLinks>
    </View>
  );
};

export default PassW;