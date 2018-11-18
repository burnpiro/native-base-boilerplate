#!/usr/bin/env bash

DIR=../
if [ $2 ]; then
NAME=$2
    if [ $3 ]; then
      VERSION=$3

    clear

    cd $DIR

    echo "Creating build folder build/ios"
    mkdir -p build && mkdir -p build/ios

    if ! [ -x "$(command -v node)" ]; then
      echo "Error: you must install Node.js first."
      exit 1
    fi

    if [ -x "$(command -v yarn)" ]; then
      echo "Using Yarn to install dependency"
      yarn
    else
      if [ -x "$(command -v npm)" ]; then
        echo "Using Npm to install dependency"
        npm install
      else
        echo "Error: you must install Yarn or Npm first."
        echo "- yarn: https://yarnpkg.com/lang/en/docs/install/"
        echo "- npm: https://www.npmjs.com/get-npm"
        exit 1
      fi
    fi

    if ! [ -x "$(command -v react-native)" ]; then
      echo "Error: react-native client is not installed."
      exit 1
    fi
    echo "Link dependencies into $NAME project"
    react-native link



    if ! [ -x "$(command -v xcodebuild)" ]; then
      echo "Error: xcodebuild is not installed."
      exit 1
    fi

    echo "Starting iOS build of $NAME-release-$VERSION"
    xcodebuild archive -project ios/$NAME.xcodeproj -scheme $NAME -archivePath build/ios/$NAME.xcarchive

    rm -f build/ios/$NAME.ipa

    if ! [ -x "$(command -v xcrun)" ]; then
      echo "Error: xcrun is not installed."
      exit 1
    fi

    if [ -d ./build/ios/$NAME.xcarchive ]; then

      xcrun xcodebuild -exportArchive -archivePath build/ios/$NAME.xcarchive -exportPath build/ios/ -exportOptionsPlist ios/$NAME/Info.plist

      rm -rf build/ios/$NAME.xcarchive
      rm -f build/ios/*.plist
      rm -f build/ios/Packaging.log

      mv build/ios/$NAME.ipa build/ios/$NAME-release-$VERSION.ipa

      if [ -f build/ios/$NAME-release-$VERSION.ipa ]; then
        echo "Success: $NAME-release-$VERSION.ipa as been created in build/ios folder."
        echo "|____$DIR"
        echo "| |____build"
        find $DIR/build/ios -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
      else
        echo "Error: Export archive failed."
      fi

    else
      echo "Error: Build failed."
      exit 1
    fi
  else
    echo "Error: App version is missing ./build-ios.sh [PACKAGE_NAME] [APP_VERSION]"
  fi
else
  echo "Error: Package name is missing ./build-ios.sh [PACKAGE_NAME] [APP_VERSION]"
fi