import React, { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header, Loading, Error } from "../../components";
import { productAction } from "./redux/action";
import { Banner, ProductItem } from "./components";

export default function Products(props) {
  const dispatch = useDispatch();
  const { loading, error, categories, products } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(productAction());
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderProduct = ({ item }) => (
    <ProductItem
      item={item}
      onSelect={() =>
        props.navigation.navigate("DetailsScreen", { item: item })
      }
    />
  );

  const renderHeader = () => (
    <Banner
      categories={categories}
      onPress={(i) =>
        props.navigation.navigate("categoryProductsScreen", {
          category_name: i,
        })
      }
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Products" />
      <FlatList
        ListHeaderComponent={renderHeader}
        data={products}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
