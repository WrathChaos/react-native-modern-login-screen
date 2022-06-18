import { StyleSheet, Dimensions } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {},
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: ScreenWidth * 0.7,
    height: ScreenWidth * 0.7,
  },
  header: {
    marginTop: 0,
  },
  titleText: {
    fontSize: 32,
    color: "#190E31",
    textAlign: "center",
    fontWeight: "600",
  },
  descriptionText: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 30,
    width: ScreenWidth * 0.9,
    textAlign: "center",
    color: "#746C82",
  },
  loginButtons: {
    marginTop: 32,
  },
  loginButtonStyle: {
    marginTop: 16,
  },
});
