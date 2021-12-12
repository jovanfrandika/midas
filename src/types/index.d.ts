type StackNavigationProp<S, T> =
  import('@react-navigation/stack').StackNavigationProp<S, T>;

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
type DetailScreenProp = StackNavigationProp<RootStackParamList, 'Detail'>;
