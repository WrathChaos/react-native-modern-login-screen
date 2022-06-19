import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./LoginButton.style";
import {
  CustomImageStyleProp,
  CustomStyleProp,
  CustomTextStyleProp,
} from "../../ModernLoginScreen";

export interface LoginButtonProps {
  text: string;
  style?: CustomStyleProp;
  textContainerStyle?: CustomStyleProp;
  imageStyle?: CustomImageStyleProp;
  textStyle?: CustomTextStyleProp;
  imageSource: ImageSourcePropType;
  TouchableComponent?: React.ComponentType;
  onPress?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  style,
  imageStyle,
  textStyle,
  textContainerStyle,
  text,
  TouchableComponent = TouchableOpacity,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableComponent style={[styles.container, style]} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={[styles.imageStyle, imageStyle]}
      />
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      </View>
    </TouchableComponent>
  );
};

export default LoginButton;
