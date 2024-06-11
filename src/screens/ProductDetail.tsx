import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import products from "../data/products.json";
import Card from "../components/Card";
import { ProductData, ProductDetailPage } from "../components/types";
import ProductInfoContainer from "../components/ProductInfoContainer";

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

  if (!renderedProduct) {
    return null;
  }

  return (
    <Card style={styles.itemContainer}>
      <ProductInfoContainer {...renderedProduct} isProductDetail={true} />
    </Card>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 10,
    borderBottomColor: "#ccc",
    borderRadius: 5,
    height: 450,
  },
});
