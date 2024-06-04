import { StyleSheet, View } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import { NavigationProp } from "@react-navigation/native";

type Navigation = {
  navigation: NavigationProp<any>;
};

const CategoryListScreen: React.FC<Navigation> = ({ navigation }) => {
  return (
    <View>
      <Categories navigation={navigation} />
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
