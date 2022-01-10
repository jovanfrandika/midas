# Sign Language App

Client mobile application for sign language.

## Project Structure

```
.
├── __test__                    # Test files
├── android                     # Android Studio Project
├── ios                         # Xcode Project
└── src
    ├── screens
    │   ├── Home/index.js       # Screen definition
    │   ├── Home/style.js       # Style definition
    │   └── ...
    └── components
        ├── Button/index.js     # Component definition
        ├── Button/style.js     # Style definition
        └── ...
```

### Prerequisites

1. [NodeJS](https://nodejs.org/en/download/) > v8.3, or use [nvm](https://github.com/nvm-sh/nvm).
2. React Native CLI, follow this [quickstart](https://facebook.github.io/react-native/docs/getting-started.html) guide.

### Installing

1. Install dependencies.

```sh
yarn
```

2. Setup `.env` files.
You should have specific files for development, testing, and production builds.
- Development: `.env.dev`,
- Testing: `.env.test`,
- Production: `.env.prod` in iOS, or `.env` in Android.

4. Run on android or ios virtual device. Open another terminal and run this command.

```sh
yarn android
# or
yarn ios
```

5. After modifying the code, you don't need to `run-android` or `run-ios` again. Simply double click r on your virtual device to reload, or type `r` in the package manager.

### Common Errors

✅ `JAVA_HOME` not found: [add jre in `.bashrc` or `.bash_profile`](https://stackoverflow.com/questions/48298910/react-native-java-home-is-not-set-and-no-java-command-could-be-found-in-your/48299843).

✅ `debug.keystore` not found: [download the template file and put it inside `/your-project-dir/android/app/`](https://github.com/facebook/react-native/issues/25629#issuecomment-513245590).


✅ `react-native run-ios` failed exit code 65: [install Cocoapods and do pod install](https://github.com/facebook/react-native/issues/25500#issuecomment-509385854).

```sh
sudo gem install cocoapods
cd ios
pod install
```

## Coding Style

We use [Airbnb](https://github.com/airbnb/javascript) coding standard. To run the linter, run this command.

```sh
yarn lint
# or with optional --fix flag
yarn lint --fix
```

## Built With

* [React-Native](https://facebook.github.io/react-native/) - The cross-platform mobile framework

## Authors

Made with 💙 by IFT.

## Acknowledgments

* Readme template from [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

