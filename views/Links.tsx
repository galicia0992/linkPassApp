import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import LinkCardGen from '../components/LinkCardGen';
import ModalLinks from '../components/ModalLinks';
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
});
const Links = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
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
        <ModalLinks
          setShowModal={setShowModal}
          showModal={showModal}></ModalLinks>
      </View>
    </View>
  );
};

export default Links;
