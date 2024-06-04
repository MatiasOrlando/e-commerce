import { FlatList, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import { Category } from "./types";

interface Navigation {
  navigation: NavigationProp<any>;
}

const Categories: React.FC<Navigation> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(category: Category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item as Category} navigation={navigation} />
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
