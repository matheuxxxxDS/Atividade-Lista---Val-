import React from 'react';

import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Image

} from 'react-native';

import {
  List
} from 'react-native-paper';

import Pessoas from '../data/Pessoas';

export default props => {

  const Item = ({ elemento: item }) => {
    return (
      <List.Item
        title={item.name}
        email={item.email}
        left={props =>
          <Image {...props}
            style={styles.tinyLogo}
            source={
              {
                uri: item.urlImagem
              }
            } />
        }
        onPress={() => props.navigation.navigate("DetalhePessoa", {id: item.id})}
      />
    )
  };

  return (
    <View style={StyleSheet.container}>
      <FlatList data={Pessoas}
          renderItem={({ item }) => <Item elemento={item}/>}
          keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
  },
  item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
  },
  title: {
      fontSize: 32,
  },
  tinyLogo: {
      width: 50,
      height: 50,
  },
});