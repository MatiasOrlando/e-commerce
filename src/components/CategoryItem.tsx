import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Card from "./Card";
import { NavigationProp } from "@react-navigation/native";
import { Category } from "./types";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/ShopSlice";

interface CategoryItemProps {
  category: Category;
  navigation: NavigationProp<any>;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  navigation,
}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("ProductList", { categoryId: category });
      }}
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
