import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Card from "./Card";
import { NavigationProp } from "@react-navigation/native";
import { Category } from "./types";

interface CategoryItemProps {
  category: Category;
  navigation: NavigationProp<any>;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  navigation,
}) => {
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

// Estilos
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
