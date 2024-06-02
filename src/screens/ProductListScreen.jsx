import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";
import products from "../data/products.json";
import Header from "../components/Header";
import Card from "../components/Card";

const ProductListScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const categoryProducts = products.filter(
    ({ category }) => category === categoryId
  );

  return (
    <View style={styles.container}>
      <Header title="Products List" />
      <Button
        onPress={() => navigation.goBack()}
        title="Go Back"
        color="#000"
      />
      <FlatList
        data={categoryProducts}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { title, description, price, images } }) => (
          <Card style={styles.itemContainer}>
            <View style={styles.productInfo}>
              <View>
                <Text style={styles.itemText}>{title}</Text>
                <Text style={styles.itemText}>{description}</Text>
                <Text style={styles.itemText}>${price}</Text>
              </View>
              <View>
                <Image
                  source={{ uri: images[0] }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            </View>
          </Card>
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
  itemText: {
    fontSize: 18,
  },
  productInfo: {
    gap: 10,
  },
});

export default ProductListScreen;
