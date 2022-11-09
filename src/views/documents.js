import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Cards from './cards';

const MyDocuments = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>MyDocuments</Text>
      <Cards />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#191970',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    color: 'grey',
    paddingBottom: 10,
  },
});

export default MyDocuments;
