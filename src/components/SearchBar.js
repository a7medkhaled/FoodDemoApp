import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchText, changeSearchText, onEndSearch }) => {
  return (
    <View style={styles.parentView}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={changeSearchText}
        value={searchText}
        onEndEditing={onEndSearch}
        placeholder="Search"
        style={styles.searchInputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    margin: 2,
    marginEnd: 20,
  },
  searchInputStyle: {
    fontSize: 25,

    flex: 1,
  },
});

export default SearchBar;
