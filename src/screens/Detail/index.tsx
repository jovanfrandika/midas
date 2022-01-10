import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import base64 from 'react-native-base64';

import { Button, Typography } from '@components';
import routes from '@constants/routes';
import BleContext from '@contexts';

import styles from './styles';

// Device's Serial Port service and write charasteristic
const serialServiceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb';
const serialCharacteristicUUID = '0000ffe1-0000-1000-8000-00805f9b34fb';

const Detail = () => {
  const { manager } = useContext(BleContext);
  const route = useRoute<DetailRouteProp>();
  const { deviceId } = route.params;
  const navigation = useNavigation<DetailScreenProp>();
  const [device, setDevice] = useState<Device>();
  const [values, setValues] = useState<string[]>([]);

  const flatlistRef = useRef<FlatList>(null);

  const handleConnectDevice = useCallback(async () => {
    const newDevice = await manager.connectToDevice(deviceId);
    setDevice(newDevice);
  }, []);

  const handleDisconnectDevice = useCallback(async () => {
    if (device) {
      const isDeviceConnected = await device.isConnected();
      if (isDeviceConnected) {
        await device.cancelConnection();
      }
    }
    navigation.goBack();
  }, [device, navigation]);

  const handleSerialPortProtocol = useCallback(async () => {
    if (device) {
      await device.discoverAllServicesAndCharacteristics();
      manager.monitorCharacteristicForDevice(
        deviceId,
        serialServiceUUID,
        serialCharacteristicUUID,
        (error: any, charasteristic: any) => {
          if (error) console.warn(error);
          if (charasteristic) {
            const newValue = base64.decode(charasteristic.value);
            const newJson = JSON.parse(newValue);

            if (newJson.md === 'C') {
              setValues((prev) => {
                const idx = prev.length - 1;
                const newValues = [...prev];
                newValues[idx] += newJson.v;
                return newValues;
              });
            } else if (newJson.md === 'N') {
              setValues((prev) => (prev.concat(newJson.v)));
            }
          }
        },
      );
    }
  }, [device]);

  const handleClearValues = useCallback(() => {
    setValues([]);
  }, []);

  useEffect(() => {
    handleSerialPortProtocol();
  }, [handleSerialPortProtocol]);

  useEffect(() => {
    if (device) {
      device.onDisconnected(() => {
        navigation.navigate(routes.home);
      });
    }
  }, [device]);

  useEffect(() => {
    handleConnectDevice();
  }, []);

  useEffect(() => {
    if (flatlistRef.current && values.length > 0) {
      const lastItemIdx = values.length - 1;
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: lastItemIdx,
      });
    }
  }, [values]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Typography weight="700" customStyles={styles.name}>
          {device?.name ? device.name : 'Unnamed'}
        </Typography>
        <Typography weight="500">{deviceId}</Typography>
      </View>
      <FlatList
        ref={flatlistRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        style={styles.flatList}
        data={values}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => (setTimeout(resolve, 500)));
          wait.then(() => {
            flatlistRef.current?.scrollToIndex({ index: info.index, animated: true });
          });
        }}
        keyExtractor={(item, index) => `${index}-${item}`}
        renderItem={({ item }) => (
          <Typography
            customStyles={styles.value}
          >
            {item}
          </Typography>
        )}
      />
      <View style={styles.action}>
        <Button color="black" onPress={handleDisconnectDevice}>
          Disconnect
        </Button>
        <Button color="red" onPress={handleClearValues} customStyles={styles.marginLeft}>
          Clear
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
