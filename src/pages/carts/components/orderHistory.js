import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
import { Modal, FlatList, Text, TouchableHighlight, View } from "react-native";
import { order_history } from "./styles";
import { HistoryItem } from "./historyItem";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function OrderHistory() {
  const [modalVisible, setModalVisible] = useState(false);
  const [storageOrder, setStorageOrder] = useState();
  async function GetOrderHistory() {
    const history = await AsyncStorage.getItem("@ORDERS");
    const parsedHistory = JSON.parse(history);
    setStorageOrder(parsedHistory);
  }

  const renderHistory = ({ item }) => <HistoryItem item={item} />;

  const renderEmpty = () => (
    <View style={order_history.empty_list_container}>
      <Text style={order_history.empty_list_text}>
        Sipariş Geçmişiniz Bulunmamaktadır !
      </Text>
      <View style={order_history.empty_list_animation}>
        <LottieView
          autoPlay
          loop={false}
          source={require("../../../assets/history.json")}
        />
      </View>
    </View>
  );

  return (
    <View style={order_history.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={order_history.container}>
          <View style={order_history.modalView}>
            <FlatList
              keyExtractor={(_, i) => i.toString()}
              data={storageOrder}
              renderItem={renderHistory}
              ListEmptyComponent={renderEmpty}
            />

            <Icon
              name="close-circle"
              color="tomato"
              size={30}
              style={{ alignSelf: "center" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={order_history.button_container}
        onPress={() => {
          setModalVisible(true);
          GetOrderHistory();
        }}
      >
        <Text style={order_history.button_text}>Sipariş Geçmişi</Text>
      </TouchableHighlight>
    </View>
  );
}
