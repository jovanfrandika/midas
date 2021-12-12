import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';

import { Button, Typography } from '@components';

import routes from '@constants/routes';

import styles from './styles';

export const exampleText = 'This is an example';
export const nextButtonLabel = 'Go to Next Screen';

export const nextButtonTestId = 'nextButtonTestId';

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const handlePressNext = useCallback(() => {
    navigation.navigate(routes.detail);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Typography>{Config.APP_TITLE}</Typography>
      <Typography>{exampleText}</Typography>
      <Button onPress={handlePressNext} testID={nextButtonTestId}>
        {nextButtonLabel}
      </Button>
    </SafeAreaView>
  );
};

export default Home;
