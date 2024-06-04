import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import products from "../data/products.json";
import Card from "../components/Card";
import { ProductData } from "../components/types";

interface RouteParams {
  productId: number;
}

interface Routing {
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

  const { title, description, price, images } = renderedProduct;

  return (
    <Card style={styles.itemContainer}>
      <View style={styles.productInfo}>
        <View>
          <Text style={styles.itemText}>{title}</Text>
          <Text style={styles.itemText}>{description}</Text>
          <Text style={styles.itemText}>${price}</Text>
        </View>
        <View>
          <Image
            source={{ uri: images[0] }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
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
  },
  itemText: {
    fontSize: 18,
  },
  productInfo: {
    gap: 10,
  },
});
