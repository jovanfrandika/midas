import { Dimensions, StyleSheet } from 'react-native';
import colors from '@constants/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: 'rgba(60,64,67,0.3)',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'black',
    padding: 12,
    minWidth: width - 50,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  connected: {
    backgroundColor: colors.green,
    borderWidth: 1,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 12,
  },
  disconnected: {
    backgroundColor: colors.red,
    borderWidth: 1,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 12,
  },
});
