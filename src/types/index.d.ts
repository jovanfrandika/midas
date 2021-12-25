type StackNavigationProp<S, T> =
  import('@react-navigation/stack').StackNavigationProp<S, T>;

type RootStackParamList = {
  Home: undefined;
  Detail: { deviceId: string };
};

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
type DetailScreenProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type StyleProp<T> = import('react-native').StyleProp<T>;
type TextStyle = import('react-native').TextStyle;
type ViewStyle = import('react-native').ViewStyle;

type Device = import('react-native-ble-plx').Device;
type Service = import('react-native-ble-plx').Service;
