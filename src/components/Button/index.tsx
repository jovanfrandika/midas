import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import colors from '@constants/colors';

import styles from './styles';

interface Props {
  children: React.ReactNode;
  color?: keyof typeof colors;
  customStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
  testID?: string;
}

const Button = ({
  children, color, customStyles, onPress, testID,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.wrapper,
      customStyles,
      {
        backgroundColor: colors[color!],
      },
    ]}
    testID={testID}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  color: 'gray',
  customStyles: null,
  testID: null,
};

export default Button;
