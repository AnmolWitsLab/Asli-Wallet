import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Cards = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.Description}>Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#fffaf0',
    borderRadius: 10,
    borderColor: 'black',
    height: 650,
  },
  Description: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
});

export default Cards;
