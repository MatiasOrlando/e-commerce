import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import cart from "../data/cart.json";
import CartItem from "./CartItem";
import { ProductData } from "./types";

const CartList: React.FC = () => {
  const totalSum: number = cart.reduce(
    (acc: number, item: ProductData) => (acc += item.price * item.quantity),
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }: { item: ProductData }) => <CartItem {...item} />}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total : ${totalSum}</Text>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginVertical: 20,
  },
  totalContainer: {
    width: "90%",
    marginBottom: 50,
  },
  totalText: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
  },
});
