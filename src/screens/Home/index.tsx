import React, {
  useContext, useMemo, useReducer, useState,
} from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, DeviceCard, Typography } from '@components';
import BleContext from '@contexts';

import requestBlePermission from '@utils/requestBlePermission';

import reducer from './reducer';

import styles from './styles';

export const exampleText = 'This is an example';
export const scanButtonLabel = 'Scan';
export const clearButtonLabel = 'Clear';

export const scanButtonTestId = 'scanButtonTestId';

const Home = () => {
  const { manager } = useContext(BleContext);
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
      <View style={styles.header}>
        <View style={styles.actions}>
          <Button
            color="blue"
            customStyles={styles.marginRight}
            onPress={handleScanDevices}
            testID={scanButtonTestId}
          >
            {scanButtonLabel}
          </Button>
          <Button color="red" onPress={() => dispatch({ type: 'CLEAR' })}>
            {clearButtonLabel}
          </Button>
        </View>
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator color="teal" size={25} />
          </View>
        )}
      </View>
    ),
    [isLoading],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Typography weight="bold" customStyles={styles.title}>
        Signed Glove Decoder
      </Typography>
      <Typography weight="bold" customStyles={styles.subtitle}>
        by Kelompok 1
      </Typography>
      <FlatList
        keyExtractor={(item) => item.id}
        data={scannedDevices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        ListHeaderComponent={ListHeaderComponent}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
