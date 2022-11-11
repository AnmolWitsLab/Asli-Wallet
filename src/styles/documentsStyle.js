import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#191970',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: '100%',
  },

  cardWrapper: {
    borderRadius: 10,
  },
  Des: {
    fontSize: 20,
    color: 'grey',
    paddingBottom: 10,
  },
  wrap: {
    borderRadius: 10,
    borderColor: 'black',
    width: '100%',
  },
  Description: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 10,
  },

  wrapDes: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400',
    color: 'black',
  },

  phoneText: {
    fontSize: 16,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  phoneNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  verifyStatus: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  verified: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },

  Wrapper: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2) ',
    alignItems: 'center',
  },
  modalWrap: {
    alignItems: 'center',
    marginTop: 310,
    borderRadius: 10,
    width: '93%',
  },
  modalWraper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 780,
  },

  textStyle: {
    borderRadius: 50,
    backgroundColor: '#191970',
    top: 400,
    left: 160,
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'center',
    width: '15%',
    alignItems: 'center',
    position: 'absolute',
  },
  Cross: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;
