import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  testID?: string;
}

const Button = ({ children, onPress, testID }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper} testID={testID}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  testID: null,
};

export default Button;
