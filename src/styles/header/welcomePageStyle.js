import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#191970',
    flexDirection: 'row',
    borderBottomColor: '#483d8b',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  ProfileAlphabet: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#483d8b',
    paddingHorizontal: 15,
    paddingVertical: 4,
  },

  Wrapper: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  Description: {
    fontSize: 18,
    color: 'grey',
  },
  Profile: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default styles;
