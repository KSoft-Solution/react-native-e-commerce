import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAsyncStorage } from "../../utils/asyncStorage";
import { DetailsItem } from "./components/detailItem";

const key = "@FAVORITE";

function ProductDetails(props) {
  const { item } = props.route.params;
  const dispatch = useDispatch();

  const [isPressed, setisPressed] = useState(false);

  const [updateStorageItem] = useAsyncStorage(key);

  return (
    <DetailsItem
      item={item}
      AddToCart={() => dispatch({ type: "ADD_TO_CART", payload: { item } })}
      onLike={() => {
        updateStorageItem(item);
        setisPressed(true);
      }}
      isPressed={isPressed}
    />
  );
}

export default ProductDetails;
