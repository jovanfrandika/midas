import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';

import { Button, Typography } from '@components';

import routes from '@constants/routes';

import styles from './styles';

export const exampleText = 'This is an example';
export const backButtonLabel = 'Go to Previous Screen';

export const backButtonTestId = 'backButtonTestId';

const Detail = () => {
  const navigation = useNavigation<DetailScreenProp>();

  const handlePressBack = useCallback(() => {
    navigation.navigate(routes.home);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Typography>{Config.APP_TITLE}</Typography>
      <Typography>{exampleText}</Typography>
      <Button onPress={handlePressBack} testID={backButtonTestId}>
        {backButtonLabel}
      </Button>
    </SafeAreaView>
  );
};

export default Detail;
