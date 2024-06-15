import { Pressable, Text, StyleSheet } from "react-native";
import Home from "../screens/Home";
import { colors } from "../global/colors";
import ProductList from "../screens/ProductList";
import CategoryList from "../screens/CategoryList";
import ProductDetail from "../screens/ProductDetail";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeNavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route: { name, params } }) => ({
        headerTitle:
          name === "Home"
            ? "Home"
            : name === "CategoryList"
            ? "Categories"
            : name === "ProductList"
            ? params.categoryId.charAt(0).toUpperCase() +
              params.categoryId.slice(1)
            : params.productTitle,
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerStyle: {
            backgroundColor: colors.green700,
          },
        })}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.goBack}>Go back</Text>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colors.green700,
          },
        })}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.goBack}>Go back</Text>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colors.green700,
          },
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.goBack}>Go back</Text>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colors.green700,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigationStack;

const styles = StyleSheet.create({
  goBack: {
    paddingLeft: 8,
  },
});
