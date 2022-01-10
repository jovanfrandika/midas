import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSection: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
  },
  action: {},
  value: {
    fontSize: 72,
  },
  flatListContainer: {
  },
  flatList: {
    marginVertical: 20,
    height: 0.5 * height,
  },
  marginLeft: {
    marginLeft: 10,
  },
});
