import React from 'react';
import { Text } from 'react-native';
import colors from '@constants/colors';

interface Props {
  children: React.ReactNode;
  color?: keyof typeof colors;
  weight?: FontWeight;
  customStyles?: StyleProp<TextStyle>;
  testID?: string;
}

const Typography = ({
  children,
  color,
  weight,
  customStyles,
  testID,
}: Props) => (
  <Text
    style={[
      customStyles,
      {
        fontWeight: weight,
        color: colors[color!],
      },
    ]}
    testID={testID}
  >
    {children}
  </Text>
);

Typography.defaultProps = {
  color: 'black',
  customStyles: null,
  weight: '400',
  testID: null,
};

export default Typography;
