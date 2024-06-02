import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Button } from "react-native";
import Home from "./src/screens/Home";
import ProductListScreen from "./src/screens/ProductListScreen";
import { colors } from "./src/global/colors";
import CategoryListScreen from "./src/screens/CategoryListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="CategoryList"
          component={CategoryListScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: "center",
  },
});
