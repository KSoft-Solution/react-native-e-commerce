import React, { useEffect } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Header, CustomButton } from "../../components";
import { FavoriteItem } from "./components";
import { useAsyncStorage } from "../../utils/asyncStorage";

const key = "@FAVORITE";

const Favorite = () => {
  const [getStorageItem, clearStorageItem] = useAsyncStorage(key);
  //   favorites: [],
  //     cart: [],
  //     total: 0,
  //     products: null,
  //     search_products: null,
  //     categories: null,
  const { favorites, cart, total } = useSelector((state) => state.pageReducer);

  useEffect(() => {
    getStorageItem();
  }, []);

  const renderPost = ({ item }) => (
    <FavoriteItem item={item} onRemove={() => clearStorageItem(item)} />
  );
  const renderHeader = () => <Header title="Favorite" />;

  const EmptyComponent = () => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ color: "grey", fontSize: 18, marginBottom: 50 }}>
          your favorite items are empty
        </Text>
        <CustomButton
          title="favorite"
          onClick={() => props.navigation.navigate("ProductScreen")}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, i) => i.toString()}
        data={favorites}
        renderItem={renderPost}
        ListEmptyComponent={EmptyComponent}
      />
    </SafeAreaView>
  );
};

export default Favorite;
