import React from "react";
import { View, FlatList, StyleSheet, Pressable } from "react-native";
import products from "../data/products.json";
import Card from "../components/Card";
import ProductInfoContainer from "../components/ProductInfoContainer";
import { ProductData } from "../components/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import Search from "../components/Search";
import { useState, useEffect } from "react";

interface RouteParams {
  categoryId: string;
}

interface ProductListScreenProps {
  route: {
    params: RouteParams;
  };
  navigation: NavigationProp<any>;
}

const ProductListScreen: React.FC<ProductListScreenProps> = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;
  const categoryProducts: ProductData[] = products.filter(
    ({ category }) => category === categoryId
  );
  const [queryValue, setQueryValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    if (queryValue && queryValue.trim() !== "") {
      const queryProducts: ProductData[] = categoryProducts.filter(
        (product: ProductData) =>
          product.title.toLowerCase().includes(queryValue.toLowerCase())
      );
      setFilteredProducts(queryProducts);
    } else {
      setFilteredProducts(categoryProducts);
    }
  }, [queryValue]);

  return (
    <View style={styles.container}>
      <Search setQueryValue={setQueryValue} />
      <FlatList
        data={filteredProducts}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }: { item: ProductData }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ProductDetail", { productId: item.id })
            }
          >
            <Card style={styles.itemContainer}>
              <ProductInfoContainer {...item} />
            </Card>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  itemContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    borderBottomColor: "#ccc",
  },
});

export default ProductListScreen;
