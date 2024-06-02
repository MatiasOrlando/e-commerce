import { Pressable, StyleSheet, View, Text } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home = ({ navigation }) => {
  return (
    <View style={{ width: "100%" }}>
      <Header title="Home" />
      <Pressable onPress={() => navigation.navigate("CategoryList")}>
        <Text>Go to categories</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
