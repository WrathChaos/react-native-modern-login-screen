import { StyleSheet, Dimensions } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    height: 60,
    width: ScreenWidth * 0.9,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EDEDED",
  },
  textContainer: {
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "600",
  },
  imageStyle: {
    height: 30,
    width: 30,
    left: 24,
    position: "absolute",
  },
});
