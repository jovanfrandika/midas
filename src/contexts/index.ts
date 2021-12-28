import { createContext } from 'react';
import { BleManager } from 'react-native-ble-plx';

export const manager = new BleManager();

const BleContext = createContext({
  manager,
});

export default BleContext;
