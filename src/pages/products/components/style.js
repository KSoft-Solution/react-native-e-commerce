import { StyleSheet, Dimensions } from "react-native";

const device_size = Dimensions.get("window");

const product_item = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    height: device_size.height / 5,
    width: device_size.width / 2,
    margin: 5,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title_container: {
    paddingTop: 15,
    borderTopColor: "#ff634750",
    borderTopWidth: 1,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C0C0C0",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#91a6bb",
  },
});

const banner = StyleSheet.create({
  image_background: {
    height: 50,
    width: 150,
    justifyContent: "center",
    margin: 10,
  },
  image: {
    borderRadius: 100,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export { product_item, banner };
