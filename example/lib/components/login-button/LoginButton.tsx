import React from 'react';
import {
  View,
  Image,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './LoginButton.style';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface LoginButtonProps {
  style?: CustomStyleProp;
  textContainerStyle?: CustomStyleProp;
  imageStyle?: CustomImageStyleProp;
  textStyle?: CustomTextStyleProp;
  imageSource: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  style,
  imageStyle,
  textStyle,
  textContainerStyle,
  text,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={[styles.imageStyle, imageStyle]}
      />
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;
