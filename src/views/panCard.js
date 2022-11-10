import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles/panCardStyle';

const PanCard = () => {
  return (
    <>
      <View style={styles.Wrapper}>
        <Text style={styles.Description}>Pan Card</Text>
      </View>
    </>
  );
};
export default PanCard;
