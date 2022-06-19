<img alt="React Native Modern Login Screen" src="assets/logo.png" width="1050"/>


[![React Native Modern Login Screen](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-modern-login-screen)

[![npm version](https://img.shields.io/npm/v/react-native-modern-login-screen.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-modern-login-screen)
[![npm](https://img.shields.io/npm/dt/react-native-modern-login-screen.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-modern-login-screen)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Modern Login Screen"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-modern-login-screen
```

## Peer Dependencies

<h5><i>Zero Dependency</i></h5>


# Usage

## Import

```jsx
import ModernLoginScreen from "react-native-modern-login-screen";
```

## Fundamental Usage

```jsx
<ModernLoginScreen
    title="Welcome to Noxx"
    description="Create an account to sync all your data and access them from anywhere."
    logoSource={require('./assets/logo-example.png')}
    onEmailPress={() => {}}
    onFacebookPress={() => {}}
    onGooglePress={() => {}}
/>
```

## Custom Usage

```jsx
 <ModernLoginScreen
    title="Welcome to Noxx"
    description="Create an account to sync all your data and access them from anywhere."
    logoSource={require('./assets/logo-example.png')}
>
    <LoginButton
        text="Continue with Facebook"
        imageSource={require('./assets/facebook.png')}
        onPress={() => {}}
    />
    <LoginButton
        text="Continue with Twitter"
        imageSource={require('./assets/twitter.png')}
        style={{marginTop: 16}}
        onPress={() => {}}
    />
    <MailButton
        text="Continue with Email"
        imageSource={require('./assets/email.png')}
        style={{marginTop: 16}}
        onPress={() => {}}
    />
</ModernLoginScreen>
```


## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property    |        Type         |  Default  | Description           |
|-------------|:-------------------:| :-------: |-----------------------|
| title       |       string        | undefined | change the title      |
| description |       string        | undefined | change the descrition |
| logoSource  | ImageSourcePropType | undefined | set your own logo     |

## Customization (Optionals)

| Property             |    Type    |  Default  | Description                                                            |
|----------------------|:----------:| :-------: |------------------------------------------------------------------------|
| style                | ViewStyle  |  default  | set or override the style object for `main container`                  |
| headerStyle          | ViewStyle  |  default  | set or override the style object for `header`                          |
| logoStyle            | ViewStyle  |  default  | set or override the style object for `logo container`                  |
| logoImageStyle       | ImageStyle |  default  | set or override the style object for `logo image`                      |
| titleTextStyle       | TextStyle  |  default  | set or override the style object for `title text`                      |
| descriptionTextStyle | TextStyle  |  default  | set or override the style object for `description text`                |
| onFacebookPress      |  function  |  default  | set the functionality when `facebook` button is pressed                |
| onGooglePress        |  function  |  default  | set the functionality when `google` button is pressed                  |
| onEmailPress         |  function  |  default  | set the functionality when `email` button is pressed                   |

## LoginButton Customization

| Property             |        Type         |     Default      | Description                                                    |
|----------------------|:-------------------:|:----------------:|----------------------------------------------------------------|
| style                |      ViewStyle      |     default      | set or override the style object for `main container`          |
| imageSource          |       source        |    undefined     | set login button image source                                  |
| imageStyle           |     ImageStyle      |     default      | set or override the style object for `image`                   |
| textContainerStyle   |      ViewStyle      |     default      | set or override the style object for `text container`          |
| textStyle            |      ViewStyle      |    undefined     | set or override the style object for `button text`             |
| descriptionTextStyle |      TextStyle      |     default      | set or override the style object for `description text`        |
| onPress              |      function       |     default      | set the functionality when `button` is pressed                 |
| TouchableComponent   | React.ComponentType | TouchableOpacity | set your own component instead of `TouchableOpacity` component |

## MailButton Customization

| Property             |        Type         |     Default      | Description                                                    |
|----------------------|:-------------------:|:----------------:|----------------------------------------------------------------|
| style                |      ViewStyle      |     default      | set or override the style object for `main container`          |
| imageSource          |       source        |    undefined     | set login button image source                                  |
| imageStyle           |     ImageStyle      |     default      | set or override the style object for `image`                   |
| textContainerStyle   |      ViewStyle      |     default      | set or override the style object for `text container`          |
| textStyle            |      ViewStyle      |    undefined     | set or override the style object for `button text`             |
| descriptionTextStyle |      TextStyle      |     default      | set or override the style object for `description text`        |
| onPress              |      function       |     default      | set the functionality when `button` is pressed                 |
| TouchableComponent   | React.ComponentType | TouchableOpacity | set your own component instead of `TouchableOpacity` component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Modern Login Screen is available under the MIT license. See the LICENSE file for more info.
