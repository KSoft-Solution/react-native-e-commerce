import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

function useAsyncStorage(key) {
  const dispatch = useDispatch();
  const favlist = useSelector((state) => state.favorites);

  async function getStorageItem() {
    const data = await AsyncStorage.getItem(key);

    if (data) {
      dispatch({ type: "SET_FAVORITE", payload: { fav: JSON.parse(data) } });
    }
  }

  async function updateStorageItem(item) {
    await dispatch({ type: "ADD_TO_FAVORITE", payload: { data: item } });

    let products = await AsyncStorage.getItem(key);
    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }
    products.push(item);
    products = JSON.stringify(products);

    await AsyncStorage.setItem(key, products);
    console.log("Product Saved Successfuly");
  }

  async function clearStorageItem(item) {
    dispatch({ type: "REMOVE_TO_FAVORITE", payload: { data: item } });
    const favListStr = await JSON.stringify(favlist);
    await AsyncStorage.setItem(key, favListStr);
  }

  return [getStorageItem, updateStorageItem, clearStorageItem];
}
export { useAsyncStorage };
