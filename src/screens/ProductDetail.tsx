import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import products from "../data/products.json";
import Card from "../components/Card";
import { ProductData, ProductDetailPage } from "../components/types";
import ProductInfoContainer from "../components/ProductInfoContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/CounterSlice";

interface RouteParams {
  productId: number;
}

interface Routing extends ProductDetailPage {
  route: {
    params: RouteParams;
  };
}

const ProductDetailScreen: React.FC<Routing> = ({ route }) => {
  const { productId } = route.params;
  const renderedProduct: ProductData | undefined = products.find(
    (product) => product.id === productId
  );

  const [stockMessage, setStockMessage] = useState<string>(null);
  const valueCounter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const handleAddQuantityItem = () => {
    valueCounter < renderedProduct.stock && dispatch(increment());

    valueCounter === renderedProduct.stock
      ? setStockMessage("You have reached the max stock available")
      : setStockMessage("");
  };

  const handleDecreaseQuantityItem = () => {
    valueCounter > 1 && dispatch(decrement());

    valueCounter === 1
      ? setStockMessage("You must add at least one product")
      : setStockMessage("");
  };

  if (!renderedProduct) {
    return <Text>Product not found</Text>;
  }

  return (
    <ScrollView>
      <Card style={styles.itemContainer}>
        <ProductInfoContainer {...renderedProduct} isProductDetail={true} />
        <View style={styles.counterContainer}>
          <Button title="+" onPress={() => handleAddQuantityItem()} />
          <TextInput
            style={styles.textInput}
            value={valueCounter.toString()}
            keyboardType="numeric"
          />
          <Button title="-" onPress={() => handleDecreaseQuantityItem()} />
        </View>
        {stockMessage && <Text>{stockMessage}</Text>}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 50,
    marginHorizontal: "5%",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 50,
    borderWidth: 1,
    textAlign: "center",
    marginHorizontal: 5,
  },
  counterText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
  },
});

export default ProductDetailScreen;
