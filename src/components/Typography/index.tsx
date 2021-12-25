import React from 'react';
import { Text } from 'react-native';

interface Props {
  children: React.ReactNode;
  customStyles?: StyleProp<TextStyle>;
  testID?: string;
}

const Typography = ({ children, customStyles, testID }: Props) => (
  <Text style={[customStyles]} testID={testID}>
    {children}
  </Text>
);

Typography.defaultProps = {
  customStyles: null,
  testID: null,
};

export default Typography;
