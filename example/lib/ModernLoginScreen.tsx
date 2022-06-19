import React from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './ModernLoginScreen.style';
import LoginButton from './components/login-button/LoginButton';
import MailButton from './components/mail-button/MailButton';

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;
export type CustomTextStyleProp =
  | StyleProp<TextStyle>
  | Array<StyleProp<TextStyle>>;
export type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface ModernLoginScreenProps {
  title: string;
  description: string;
  style?: CustomStyleProp;
  headerStyle?: CustomStyleProp;
  logoStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
  logoSource: ImageSourcePropType;
  onFacebookPress: () => void;
  onGooglePress: () => void;
  onEmailPress: () => void;
}

const ModernLoginScreen: React.FC<ModernLoginScreenProps> = ({
  style,
  logoSource,
  title,
  description,
  titleTextStyle,
  descriptionTextStyle,
  logoImageStyle,
  headerStyle,
  logoStyle,
  onFacebookPress,
  onGooglePress,
  onEmailPress,
  children,
}) => {
  const renderLogo = () => (
    <View style={[styles.logo, logoStyle]}>
      <Image
        resizeMode="contain"
        source={logoSource}
        style={[styles.logoImage, logoImageStyle]}
      />
    </View>
  );

  const renderHeader = () => (
    <View style={[styles.header, headerStyle]}>
      <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
      <Text style={[styles.descriptionText, descriptionTextStyle]}>
        {description}
      </Text>
    </View>
  );

  const DefaultSocialLoginButtons = () => (
    <>
      <LoginButton
        text="Continue with Facebook"
        imageSource={require('./local-assets/facebook.png')}
        onPress={onFacebookPress}
      />
      <LoginButton
        text="Continue with Google"
        imageSource={require('./local-assets/google.png')}
        style={styles.loginButtonStyle}
        onPress={onGooglePress}
      />
      <MailButton
        text="Continue with Email"
        imageSource={require('./local-assets/email.png')}
        style={styles.loginButtonStyle}
        onPress={onEmailPress}
      />
    </>
  );

  return (
    <View style={[styles.container, style]}>
      {renderLogo()}
      {renderHeader()}
      <View style={styles.loginButtons}>
        {children || <DefaultSocialLoginButtons />}
      </View>
    </View>
  );
};

export default ModernLoginScreen;
