import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { ProductData } from "./types";

const CartItem: React.FC<ProductData> = ({
  title,
  discountPercentage,
  price,
  rating,
  quantity,
}) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={{ padding: 25, rowGap: 5 }}>
        <Text style={styles.infoProduct}>{title}</Text>
        <Text style={styles.infoProduct}>Discount: %{discountPercentage}</Text>
        <Text style={styles.infoProduct}>Price: ${price}</Text>
        <Text style={styles.infoProduct}>Rating: {rating}</Text>
        <Text style={styles.infoProduct}>Quantity: {quantity}</Text>
        <Text style={styles.infoProduct}>Subtotal: ${quantity * price}</Text>
      </View>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  infoProduct: {
    fontSize: 18,
  },
});
