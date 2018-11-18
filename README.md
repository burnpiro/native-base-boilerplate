# Native base boilerplate

[![rn version][rn-badge]][rn-url] [![react version][react-badge]][react-url] [![jest version][jest-badge]][jest-url]

## Environment

Install NODE and Watchman (Recommended OSX):
```
brew install
brew install watchman
```

Install react-native CLI:
```
npm install -g react-native-cli
```

To run android or ios you need to install android studio and/or xcode first.

Install Xcode  (Version >=8) via the Mac App Store

https://developer.apple.com/xcode/

Download and install JDK8 or newer

http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Android Studio:

https://developer.android.com/studio/install.html

then you need tu run emulator of your device

https://developer.android.com/studio/run/emulator.html

Setup your Android Development environment

https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment

QuickStart (OSX/Unix)
-----------------------

Follow these instructions to get your development environment up and running quickly.

1. Clone the repo and run `yarn` in the project root
1. Run `react-native link` in the project root
1. Start the react-native development environment with `react-native run-ios` or `react-native run-android`

## Production build

From root directory,

run with `yarn` or `npm`

```
yarn run build-android
yarn run build-ios
**check package.json to view full command list**
```

commands above will create build base on version and name set in `package.json` so please keep that up to date

## Deployment

### Android
1. Change the versionCode and versionName of the application by updating the AndroidManifest.xml and build.gradle files situated under the android folder
2. Update the version in the package.json file, this value will be use in app
3. On terminal go to the root folder of your targeted app and run the command 'npm run android-build-release'
4. At this stage a .apk file should have been created under the build/android folder
5. To sign the .apk, use the apksigner tool by running the command 'apksigner sign --ks ../sd-online-native.jks build/android/APP_NAME-VERSION.apk'
6. You can check if the .apk is correctly sign by running the command 'apksigner verify --print-certs build/android/APP_NAME-VERSION.apk'


### iOS
1. Double click on the targeted app folder [APP_NAME].xcodeproj under the ios folder
2. Once Xcode open, select your project and go to the general settings page. From here you must update the version and the build number
3. Verify that you use a valid Provisioning Certificate, otherwise you wont be able to sign the application.
4. Click on Product -> Archive on the top menu bar
5. Once the Archive created another window will open, from there you can upload the application to the App Store


[rn-badge]: https://img.shields.io/badge/RN-0.57.*-green.svg?style=flat
[rn-url]: https://facebook.github.io/react-native/
[react-badge]: https://img.shields.io/badge/React-16.6.*-green.svg?style=flat
[react-url]: https://reactjs.org/
[jest-badge]: https://img.shields.io/badge/Jest-23.6.*-green.svg?style=flat
[jest-url]: https://facebook.github.io/jest/
