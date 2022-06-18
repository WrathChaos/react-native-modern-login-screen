import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ModernLoginScreen.style";
import LoginButton from "./components/login-button/LoginButton";
import MailButton from "./components/mail-button/MailButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface ModernLoginScreenProps {
  style?: CustomStyleProp;
  title: string;
  description: string;
  logoImageStyle?: CustomImageStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
  logoSource: ImageSourcePropType;
}

const ModernLoginScreen: React.FC<ModernLoginScreenProps> = ({
  style,
  logoSource,
  title,
  description,
  titleTextStyle,
  descriptionTextStyle,
  logoImageStyle,
}) => {
  const renderLogo = () => (
    <View style={styles.logo}>
      <Image
        resizeMode="contain"
        source={logoSource}
        style={[styles.logoImage, logoImageStyle]}
      />
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
      <Text style={[styles.descriptionText, descriptionTextStyle]}>
        {description}
      </Text>
    </View>
  );

  const renderLoginButtons = () => (
    <View style={styles.loginButtons}>
      <LoginButton
        text="Continue with Facebook"
        imageSource={require("./local-assets/facebook.png")}
        onPress={() => {}}
      />
      <LoginButton
        text="Continue with Google"
        imageSource={require("./local-assets/google.png")}
        style={styles.loginButtonStyle}
        onPress={() => {}}
      />
      <MailButton
        text="Continue with Email"
        imageSource={require("./local-assets/email.png")}
        style={styles.loginButtonStyle}
        onPress={() => {}}
      />
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      {renderLogo()}
      {renderHeader()}
      {renderLoginButtons()}
    </View>
  );
};

export default ModernLoginScreen;
