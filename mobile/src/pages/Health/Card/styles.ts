import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerCard: {
    marginTop: '3%',
    flexWrap: 'wrap',
    height: 140,
    width: 320,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 15,
  },
  title: {
    marginTop: '5%',
  },
  card: {
    padding: 5,
    width: '75%',
  },
  avatar: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  isScheduledText: {
    color: '#0F7523',
  },
  paragraph: {
    fontSize: 11,
    marginBottom: -8,
  },
});

export default styles;
