module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
