import React, { useMemo, useReducer, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BleManager } from 'react-native-ble-plx';
import Config from 'react-native-config';

import { Button, DeviceCard, Typography } from '@components';

import requestBlePermission from '@utils/requestBlePermission';

import reducer from './reducer';

import styles from './styles';

export const exampleText = 'This is an example';
export const nextButtonLabel = 'Go to Next Screen';
export const clearButtonLabel = 'Clear';

export const nextButtonTestId = 'nextButtonTestId';

const manager = new BleManager();

const Home = () => {
  const [scannedDevices, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(false);

  const handleScanDevices = async () => {
    await requestBlePermission();

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
      <View>
        <Button onPress={handleScanDevices} testID={nextButtonTestId}>
          {nextButtonLabel}
        </Button>
        <Button onPress={() => dispatch({ type: 'CLEAR' })}>
          {clearButtonLabel}
        </Button>
        {isLoading && (
          <View>
            <ActivityIndicator color="teal" size={25} />
          </View>
        )}
      </View>
    ),
    [isLoading],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Typography>{Config.APP_TITLE}</Typography>
      <FlatList
        keyExtractor={(item) => item.id}
        data={scannedDevices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
};

export default Home;
