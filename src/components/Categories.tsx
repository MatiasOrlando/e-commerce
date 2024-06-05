import { FlatList, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import { Category } from "./types";
import { useEffect, useState } from "react";

interface Navigation {
  navigation: NavigationProp<any>;
  queryValue: string;
}

const Categories: React.FC<Navigation> = ({ navigation, queryValue }) => {
  const convertedCategories: Category[] = categories.map(
    (category: string) => category as Category
  );

  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(convertedCategories);

  useEffect(() => {
    if (queryValue && queryValue.trim() !== "") {
      const queryCategories: Category[] = convertedCategories.filter(
        (category: Category) =>
          category.toLowerCase().includes(queryValue.toLowerCase())
      );
      setFilteredCategories(queryCategories);
    } else {
      setFilteredCategories(convertedCategories);
    }
  }, [queryValue]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(category: Category) => category}
        data={filteredCategories}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
