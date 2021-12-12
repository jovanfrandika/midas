import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { Device } from 'react-native-ble-plx';
import base64 from 'react-native-base64';

import styles from './styles';

type Props = {
  device: Device;
};

const DeviceCard = ({ device }: Props) => {
  const navigation = useNavigation<HomeScreenProp>();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // is the device connected?
    device.isConnected().then(setIsConnected);
  }, [device]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Device', { device })}
    >
      <Text>{`Id : ${device.id}`}</Text>
      <Text>{`Name : ${device.name}`}</Text>
      <Text>{`Is connected : ${isConnected}`}</Text>
      <Text>{`RSSI : ${device.rssi}`}</Text>
      {/* Decode the ble device manufacturer which is encoded with the base64 algorythme */}
      <Text>
        {`Manufacturer : ${base64.decode(
          device.manufacturerData?.replace(/[=]/g, ''),
        )}`}
      </Text>
      <Text>{`ServiceData : ${device.serviceData}`}</Text>
      <Text>{`UUIDS : ${device.serviceUUIDs}`}</Text>
    </TouchableOpacity>
  );
};

export default DeviceCard;
