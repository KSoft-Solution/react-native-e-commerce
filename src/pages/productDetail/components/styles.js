import { StyleSheet, Dimensions } from "react-native";

const device_size = Dimensions.get("window");

const details_item = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    height: device_size.height / 3,
    width: device_size.width / 2,
    marginVertical: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title_container: {
    paddingTop: 15,
    borderTopColor: "#0001",
    borderTopWidth: 1,
    margin: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "tomato",
  },
  description: {
    flex: 1,
    color: "grey",
    fontSize: 14,
    marginHorizontal: 15,
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "tomato",
    marginBottom: 10,
    marginLeft: 30,
  },
});

export { details_item };
