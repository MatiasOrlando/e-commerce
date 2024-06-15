import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import cart from "../data/cart.json";
import CartItem from "./CartItem";
import { ProductData } from "./types";

const CartList: React.FC<ProductData> = () => {
  const totalSum: number = cart.reduce(
    (acc: number, item: ProductData) => (acc += item.price * item.quantity),
    0
  );

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }: { item: ProductData }) => <CartItem {...item} />}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={{
          marginVertical: 20,
        }}
      />

      <View style={{ marginTop: 25, width: "90%" }}>
        <Text style={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>
          Total : ${totalSum}
        </Text>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({});
