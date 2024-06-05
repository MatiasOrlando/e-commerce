import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Categories from "../components/Categories";
import { NavigationProp } from "@react-navigation/native";
import Search from "../components/Search";

type Navigation = {
  navigation: NavigationProp<any>;
};

const CategoryListScreen: React.FC<Navigation> = ({ navigation }) => {
  const [queryValue, setQueryValue] = useState<string>("");
  return (
    <View>
      <Search setQueryValue={setQueryValue} />
      <Categories navigation={navigation} queryValue={queryValue} />
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
