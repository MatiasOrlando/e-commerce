import React, { useEffect } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../features/theme/Themeslice";

const Home = ({ navigation }) => {
  const theme = useSelector((state: any) => state.theme.themeValue);
  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.container,
        theme === "light" ? styles.containerLight : styles.containerDark,
      ]}
    >
      <Pressable
        onPress={() => {
          dispatch(handleTheme());
          navigation.navigate("CategoryList");
        }}
      >
        <Text
          style={[
            styles.text,
            theme === "light" ? styles.containerLight : styles.containerDark,
          ]}
        >
          Go to categories
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerLight: {
    backgroundColor: "lavender",
    color: "black",
  },
  containerDark: {
    backgroundColor: "black",
    color: "white",
  },
  text: {
    fontSize: 18,
  },
});
