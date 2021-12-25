type StackNavigationProp<S, T> =
  import('@react-navigation/stack').StackNavigationProp<S, T>;

type RouteProp<S, T> = import('@react-navigation/native').RouteProp<S, T>;

type RootStackParamList = {
  Home: undefined;
  Detail: { deviceId: string };
};

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
type DetailScreenProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type StyleProp<T> = import('react-native').StyleProp<T>;
type TextStyle = import('react-native').TextStyle;
type ViewStyle = import('react-native').ViewStyle;
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type Device = import('react-native-ble-plx').Device;
type Service = import('react-native-ble-plx').Service;
