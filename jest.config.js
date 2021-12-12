module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  verbose: true,
  preset: 'react-native',
  transformIgnorePatterns: [
    // create mocks for third party library
    // create under __mocks__ folder every time we create a test case
    // other libraries can be put under here
    'node_modules/(?!react-native|@react-native|@react-native-community|react-native-screens/)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  coveragePathIgnorePatterns: ['/node_modules/'],
};
