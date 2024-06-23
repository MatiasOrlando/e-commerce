import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Card from "../components/Card";
import ProductInfoContainer from "../components/ProductInfoContainer";
import { ProductData } from "../components/types";
import { NavigationProp } from "@react-navigation/native";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductIdSelected } from "../features/shop/ShopSlice";

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
  const products = useSelector((state: any) => state.shop.value.products);
  const [queryValue, setQueryValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

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
            onPress={() => {
              dispatch(setProductIdSelected(item.id));
              navigation.navigate("ProductDetail", {
                productId: item.id,
                productTitle: item.title,
              });
            }}
          >
            <Card
              style={[
                styles.itemContainer,
                orientation === "portrait"
                  ? styles.portraitItem
                  : styles.landscapeItem,
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
  contentContainer: {
    alignItems: "center",
  },
  itemContainer: {
    aspectRatio: 1,
    marginVertical: 25,
    borderBottomColor: "#ccc",
    borderRadius: 5,
    height: 370,
    paddingVertical: 23,
  },
  portraitItem: {
    width: "auto",
    marginHorizontal: 40,
  },
  landscapeItem: {
    width: 300,
    marginHorizontal: 25,
  },
});

export default ProductListScreen;
