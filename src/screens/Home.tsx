import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("CategoryList")}>
          <Text style={styles.text}>Go to categories</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 300,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
