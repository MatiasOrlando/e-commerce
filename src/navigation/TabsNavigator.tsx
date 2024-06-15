import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigationStack from "./HomeNavigationStack";
import CartNavigationStack from "./CartNavigationStack";
import OrderNavigationStack from "./OrderNavigationStack";
import { colors } from "../global/colors";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TabBarIcon } from "../components/TabBarIcon";

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerTitle: route.name,
        headerShown: route.name === "Shop" ? false : true,
        headerStyle: {
          backgroundColor: colors.green700,
        },
      })}
    >
      <Tabs.Screen
        name="Shop"
        component={HomeNavigationStack}
        options={{
          title: "Shop",
          tabBarIcon: () => <Entypo name="shop" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartNavigationStack}
        options={{
          title: "Cart",
          tabBarIcon: () => <TabBarIcon name="cart" />,
        }}
      />
      <Tabs.Screen
        name="Orders"
        component={OrderNavigationStack}
        options={{
          title: "Orders",
          tabBarIcon: () => (
            <MaterialIcons name="receipt-long" size={24} color="black" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});
