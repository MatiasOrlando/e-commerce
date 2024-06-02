import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductList", { categoryId: category })
      }
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
  },
});
