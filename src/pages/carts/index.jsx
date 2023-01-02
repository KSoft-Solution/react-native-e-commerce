import React from "react";
import { SafeAreaView, View, Text, FlatList, Alert } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomButton, Header, Footer } from "../../components";
import { OrderHistory,CartItem } from "./components";
import { cart_list } from "./components/styles";

const Carts = (props) => {
  const { total, cart } = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();

  async function SubmitOrder() {
    let orders = await AsyncStorage.getItem("@ORDERS");
    if (!orders) {
      orders = [];
    } else {
      orders = JSON.parse(orders);
    }
    orders.push({
      Order: cart.map((item) => item.title),
      TotalPrice: total,
    });
    orders = JSON.stringify(orders);

    await AsyncStorage.setItem("@ORDERS", orders);
    Alert.alert("* Bilgi *", "Siparişiniz alınmıştır");
    dispatch({ type: "SUBMIT_ORDER" });
  }

  const renderCart = ({ item }) => (
    <CartItem
      item={item}
      onDelete={() =>
        dispatch({ type: "DELETE_ITEM_FROM_CART", payload: { item } })
      }
    />
  );

  const renderHeader = () => <Header title="Sepetim" />;

  return (
    <SafeAreaView style={cart_list.Container}>
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={renderHeader}
          keyExtractor={(_, i) => i.toString()}
          data={cart}
          renderItem={renderCart}
          ListEmptyComponent={
            <View style={cart_list.emptyList_container}>
              <Icon
                name="cart-remove"
                size={100}
                style={cart_list.emptyList_icon}
              />
              <Text style={cart_list.emptyList_text}>
                Sepetinizde ürün bulunmamaktadır!
              </Text>
              <CustomButton
                title="Ürünlere Git"
                onClick={() => props.navigation.navigate("ProductScreen")}
              />
              <OrderHistory />
            </View>
          }
        />
      </View>
      {cart.length != 0 ? (
        <View>
          <Footer>
            <Text style={cart_list.price}>{total.toFixed(2)} $</Text>
            <CustomButton title="Sepeti Onayla" onClick={SubmitOrder} />
          </Footer>
          <OrderHistory />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Carts;
