import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { Device } from 'react-native-ble-plx';

import Typography from '@components/Typography';
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
      onPress={() => navigation.navigate('Detail', { deviceId: device.id })}
    >
      <View style={styles.topSection}>
        <Typography weight="500">{device.id}</Typography>
        {isConnected && (
          <View style={styles.connected}>
            <Typography weight="bold" color="darkGreen">
              Connected
            </Typography>
          </View>
        )}
        {!isConnected && (
          <View style={styles.disconnected}>
            <Typography weight="bold" color="darkRed">
              Not Connected
            </Typography>
          </View>
        )}
      </View>
      <Typography weight="bold">{`name  : ${device.name}`}</Typography>
      <Typography weight="700">{`RSSI  : ${device.rssi}`}</Typography>
    </TouchableOpacity>
  );
};

export default DeviceCard;
