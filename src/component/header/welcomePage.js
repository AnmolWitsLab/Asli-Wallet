import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import MyDocuments from '../../views/documents';
import styles from '../../styles/header/welcomePageStyle';

const WelcomePage = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={styles.ProfileAlphabet}>A</Text>
        <View style={styles.Wrapper}>
          <Text style={styles.Description}>Welcome</Text>
          <Text style={styles.Profile}>Anmol Mehra</Text>
        </View>
      </View>
      <MyDocuments />
    </SafeAreaView>
  );
};

export default WelcomePage;
