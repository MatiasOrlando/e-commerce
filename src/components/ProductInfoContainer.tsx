import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductData, ProductDetailPage } from "./types";

type ProductDataCard = ProductData & ProductDetailPage;

const ProductInfo: React.FC<ProductDataCard> = ({
  title,
  brand,
  description,
  price,
  images,
  thumbnail,
  isProductDetail,
}) => {
  return (
    <View style={styles.productInfo}>
      <View style={styles.textContainer}>
        <Text style={styles.itemTextTitle}>{!isProductDetail && brand}</Text>
        <Text style={styles.itemTextTitle}>{title}</Text>
        <Text style={styles.itemText}>{isProductDetail && description}</Text>
        <Text style={styles.itemTextPrice}>${price}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: isProductDetail ? images[0] : thumbnail }}
          style={[styles.image, { height: isProductDetail ? 295 : 220 }]}
        />
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  productInfo: {
    padding: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 370,
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
});
