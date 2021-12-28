import { PermissionsAndroid, Platform } from 'react-native';

const requestBlePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      }
      console.log('Location permission for bluetooth scanning revoked');
      return false;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
};

export default requestBlePermission;
