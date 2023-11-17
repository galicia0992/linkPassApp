import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';
import LinkCardGen from '../components/LinkCardGen';
import ModalLinks from '../components/ModalLinks';
import {ScrollView, Box} from '@gluestack-ui/themed';
import {getDatabase, ref, child, get, onValue} from 'firebase/database';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '98%',
    padding: 24,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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

const Links = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [showLinkC, setShowLinkC] = useState(false);
  const [listaLinks, setListaLinks] = useState([])
  
  useEffect(() => {
    const dbRef = ref(getDatabase());
    onValue(dbRef, (snapshot) =>{
      const data = snapshot.val()
      Object.values(data).map(item =>{
        setListaLinks(Object.values(item[0]))
      })
    })
  }, [])
 

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.textHeader}>Almacen de links</Text>
          <Text style={styles.textDescription}>
            Guarda/elimina tus ligas en la seccion inferior. las ligas que
            elimines no las podras recuperar
          </Text>
        </View>
        <LinkCardGen setShowModal={setShowModal}></LinkCardGen>
        {!showLinkC ? (
          <Box style={styles.boxNewLink}>
            <Image
              style={styles.logo}
              source={require('../img/booking.png')}></Image>
            <Text style={styles.inicia}>Inicia desde aqui</Text>
            <Text style={styles.font}>
              Usa el boton "Añade un nuevo link" para iniciar. una vez que
              tengas un Link, podras editarlo.{' '}
            </Text>
            {
              listaLinks.map(item =>{
                return <Text>{item.Category}</Text>
              })
            }
          </Box>
        ) : (
          <ScrollView>
            <View style={{paddingBottom: '100%'}}></View>
          </ScrollView>
        )}
      </View>
      <ModalLinks
        setShowModal={setShowModal}
        showModal={showModal}></ModalLinks>
    </View>
  );
};

export default Links;
