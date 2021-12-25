import React, { useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from '@navigations';
import BleContext, { manager } from '@contexts';

const App = () => {
  const value = useMemo(() => ({ manager }), [manager]);
  return (
    <SafeAreaProvider>
      <BleContext.Provider value={value}>
        <Navigation />
      </BleContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
