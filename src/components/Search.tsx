import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const Search = ({ setQueryValue }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Buscar..."
        onChangeText={setQueryValue}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
  },
  textInput: {
    backgroundColor: "white",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
});
