import React,{useEffect} from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productCategoryAction } from "./redux/action";
import { ProductItem } from "../products/components";
import { Header, Loading, Error } from "../../components";

function CategoryProducts(props) {
  const { category_name } = props.route.params;
  const dispatch = useDispatch();
  const { loading, error, product_categories } = useSelector(
    (state) => state.categoryProductReducer
  );

  useEffect(() => {
    dispatch(productCategoryAction(category_name));
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={category_name} />
      <FlatList
        data={product_categories}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default CategoryProducts;
