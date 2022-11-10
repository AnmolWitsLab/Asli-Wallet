import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles/aadharCardStyle';

const AadharCard = () => {
  return (
    <>
      <View style={styles.Wrapper}>
        <Text style={styles.Description}>Aadhar Card</Text>
      </View>
    </>
  );
};

export default AadharCard;
