import {View, Text} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import getLinks from '../api/get.js';
interface Props{
    setShowLinkC: any,
    setTotalLinks: any
}

const LinksComponent = ({setShowLinkC, setTotalLinks}: Props) => {
  const [listaLinks, setListaLinks] = useState<any[]>([]);
  setTotalLinks(listaLinks.length)
  useEffect(() => {
    getLinks(setListaLinks);
    
  }, []);
  
  return (
    <View style={{paddingBottom: '100%'}}>
      {listaLinks.map(item => {
        return (
          <View key={item.id}>
            <Text>{item.category}</Text>
          </View>
        );
      })}
      
    </View>
  );
};

export default LinksComponent;
