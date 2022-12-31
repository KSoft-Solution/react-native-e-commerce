import { StyleSheet, Dimensions } from "react-native";

const device_size = Dimensions.get("window");

const header = StyleSheet.create({
  container: {
    backgroundColor: "#0001",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  },
});

const footer = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    margin: 10,
  },
});

const custom_button = StyleSheet.create({
  container: {
    width: device_size.width / 2,
    padding: 10,
    backgroundColor: "tomato",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const search_bar = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  iconContainer: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#353233",
    marginRight: 10,
  },
  inputContainer: {
    borderColor: "#353233",
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 10,
  },
});

export { header, footer, custom_button, search_bar };
