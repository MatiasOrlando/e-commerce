import { StyleSheet, Button, View } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";

const CategoryListScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="Category List" />
      <Button
        onPress={() => navigation.goBack()}
        title="Go Back"
        color="#000"
      />
      <Categories navigation={navigation} />
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
