import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, Text } from "react-native";
import Home from "./src/screens/Home";
import { colors } from "./src/global/colors";
import ProductList from "./src/screens/ProductList";
import CategoryList from "./src/screens/CategoryList";
import ProductDetail from "./src/screens/ProductDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
                <Text>Go back</Text>
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: colors.green700,
            },
            headerTitle: "Products list",
          })}
        />
        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text> Go back</Text>
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: colors.green700,
            },
            headerTitle: "Categories",
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text> Go back</Text>
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: colors.green700,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
