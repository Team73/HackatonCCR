import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C678F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    backgroundColor: '#F2C2B8',
    marginBottom: 10,
  },
  fab: {
    backgroundColor: '#9D270E',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  buttonHelp: {
    top: -5,
    right: -15,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#9D270E',
  },
  textHelp: {
    alignSelf: 'center',
    color: '#FFFF',
    marginTop: -20,
  },
  icon: {
    marginTop: -7,
  },
});

export default styles;
