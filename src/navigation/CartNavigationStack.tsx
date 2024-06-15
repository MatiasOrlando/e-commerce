import { StyleSheet } from "react-native";
import CartList from "../components/CartList";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../global/colors";

const Stack = createStackNavigator();

const CartNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartList"
        component={CartList}
        options={() => ({
          headerStyle: {
            backgroundColor: colors.green700,
          },
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default CartNavigationStack;

const styles = StyleSheet.create({});
