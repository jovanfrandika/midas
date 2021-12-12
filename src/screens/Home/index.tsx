import React, {
  useCallback, useMemo, useReducer, useState,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  PermissionsAndroid,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BleManager, Device } from 'react-native-ble-plx';
import Config from 'react-native-config';

import { Button, DeviceCard, Typography } from '@components';

import routes from '@constants/routes';

import styles from './styles';

export const exampleText = 'This is an example';
export const nextButtonLabel = 'Go to Next Screen';
export const clearButtonLabel = 'Clear';

export const nextButtonTestId = 'nextButtonTestId';

const manager = new BleManager();

const reducer = (
  state: Device[],
  action: { type: 'ADD_DEVICE'; payload: Device } | { type: 'CLEAR' },
): Device[] => {
  switch (action.type) {
    case 'ADD_DEVICE':
      const device = action.payload;

      // check if the detected device is not already added to the list
      if (device && !state.find((dev) => dev.id === device.id)) {
        return [...state, device];
      }
      return state;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

const requestLocationPermission = async () => {
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
};

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const [scannedDevices, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(false);

  const handleScanDevices = async () => {
    // display the Activityindicator
    await requestLocationPermission();

    setIsLoading(true);

    // scan devices
    manager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }

      if (scannedDevice) {
        dispatch({ type: 'ADD_DEVICE', payload: scannedDevice });
      }
    });

    setTimeout(() => {
      manager.stopDeviceScan();
      setIsLoading(false);
    }, 5000);
  };

  const ListHeaderComponent = useMemo(
    () => (
      <View style={styles.body}>
        <Button onPress={handleScanDevices} testID={nextButtonTestId}>
          {nextButtonLabel}
        </Button>
        <Button onPress={() => dispatch({ type: 'CLEAR' })}>
          {clearButtonLabel}
        </Button>
        {isLoading && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color="teal" size={25} />
          </View>
        )}
      </View>
    ),
    [isLoading],
  );

  const handlePressNext = useCallback(() => {
    navigation.navigate(routes.detail);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Typography>{Config.APP_TITLE}</Typography>
      <FlatList
        keyExtractor={(item) => item.id}
        data={scannedDevices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
};

export default Home;
