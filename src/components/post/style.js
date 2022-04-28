import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:Dimensions.get("window").height-Dimensions.get("window").height*(6/100),
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  pauseButton: {},

  elements: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  bottomElements: {
    width: Dimensions.get("window").width,

    margin: 16,
    marginTop: 5,
    marginBottom: 0,
  },
  bottomTexts: {
    color: "white",
    fontSize: 14,
    marginBottom: 6,
  },
  musicInfo: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
  },
  musicPlayerIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 20,
  },
  musicIcon: {
    marginRight: 10,

    paddingTop: 5,
  },

  rightElements: {
    width: Dimensions.get("window").width,
    marginTop: 0,
    display: "flex",
    alignItems: "flex-end",
  },

  right: {
  
    paddingBottom: 0,

    marginTop: 35,
    marginRight: 10,
    marginLeft: 10,
  },
  rightElementCounter: {
    color: "white",
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  followButton: {
    position: "absolute",
    bottom: -6,
    left: 23,
  },
  profilImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
    paddingBottom: 0,
    marginTop: 35,
    marginRight: 10,
    marginLeft: 10,
  },
});
export default styles;
