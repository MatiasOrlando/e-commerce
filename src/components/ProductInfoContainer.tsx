import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductData } from "./types";

const ProductInfo: React.FC<ProductData> = ({
  title,
  description,
  price,
  images,
}) => {
  return (
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
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  itemText: {
    fontSize: 18,
  },
  productInfo: {
    gap: 10,
  },
});
