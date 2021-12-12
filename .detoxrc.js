module.exports = {
  testRunner: 'jest',
  runnerConfig: './jest.e2e.config.js',
  devices: {
    emulator: {
      type: 'android.emulator',
      device: {
        // use underscore in detox, use space in android studio to name the AVD
        avdName: 'Pixel_3_API_29_e2e',
      },
    },
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12',
      },
    },
  },
  apps: {
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ENVFILE=.env.test ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ENVFILE=.env.test ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..',
    },
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/veritas.app',
      build:
        'xcodebuild -workspace ios/veritas.xcworkspace -configuration Debug -scheme veritas -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/veritas.app',
      build:
        'xcodebuild -workspace ios/veritas.xcworkspace -configuration Release -scheme veritas -sdk iphonesimulator -derivedDataPath ios/build',
    },
  },
  configurations: {
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
  },
};
