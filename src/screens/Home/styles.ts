import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
  subtitle: {
    marginBottom: 40,
  },
  content: {
    width: '100%',
  },
  contentContainer: {},
  header: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loading: {
    marginBottom: 10,
  },
  marginRight: {
    marginRight: 10,
  },
});
