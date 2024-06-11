import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  ViewStyle,
} from "react-native";
import products from "../data/products.json";
import Card from "../components/Card";
import ProductInfoContainer from "../components/ProductInfoContainer";
import { ProductData } from "../components/types";
import { NavigationProp } from "@react-navigation/native";
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

type Orientation = "portrait" | "landscape";
const ProductListScreen: React.FC<ProductListScreenProps> = ({
  route,
  navigation,
}) => {
  const [queryValue, setQueryValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const { height, width } = useWindowDimensions();

  const { categoryId } = route.params;
  const categoryProducts: ProductData[] = products.filter(
    ({ category }) => category === categoryId
  );

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

  useEffect(() => {
    width > height ? setOrientation("landscape") : setOrientation("portrait");
  }, [height, width]);

  return (
    <View style={styles.container}>
      <Search setQueryValue={setQueryValue} />
      <FlatList
        data={filteredProducts}
        contentContainerStyle={{ alignItems: "center" }}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }: { item: ProductData }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ProductDetail", { productId: item.id })
            }
          >
            <Card
              style={[
                styles.itemContainer,
                {
                  paddingVertical: 23,
                  width: orientation === "portrait" ? "auto" : 300,
                  marginHorizontal: orientation === "portrait" ? 40 : 25,
                },
              ]}
            >
              <ProductInfoContainer
                {...item}
                orientation={orientation}
                isProductDetail={false}
              />
            </Card>
          </Pressable>
        )}
        numColumns={orientation === "portrait" ? 1 : 2}
        key={orientation}
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
    aspectRatio: 1,
    marginVertical: 25,
    borderBottomColor: "#ccc",
    borderRadius: 5,
    height: 400,
  } as ViewStyle,
});

export default ProductListScreen;
