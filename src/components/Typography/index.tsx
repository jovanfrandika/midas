import React from 'react';
import { Text } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Typography = ({ children }: Props) => (
  <Text>
    {children}
  </Text>
);

export default Typography;
