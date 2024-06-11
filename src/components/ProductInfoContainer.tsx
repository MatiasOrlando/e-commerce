import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductData, ProductDetailPage } from "./types";

type ProductDataCard = ProductData & ProductDetailPage;

const ProductInfo: React.FC<ProductDataCard> = ({
  title,
  description,
  price,
  images,
  thumbnail,
  isProductDetail,
}) => {
  return (
    <View style={styles.productInfo}>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.itemTextTitle}>{title}</Text>
        <Text style={styles.itemText}>{description}</Text>
        <Text style={styles.itemTextPrice}>${price}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: isProductDetail ? images[0] : thumbnail }}
          style={{
            width: isProductDetail ? 300 : 365,
            height: isProductDetail ? 250 : 195,
          }}
        />
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
  },
  itemTextTitle: {
    fontSize: 22,
    paddingBottom: 5,
  },
  itemTextPrice: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    paddingVertical: 10,
  },
  productInfo: {
    padding: 10,
  },
});
