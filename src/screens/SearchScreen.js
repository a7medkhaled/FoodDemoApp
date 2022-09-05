import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const changeSearchText = (s) => setSearchText(s);
  const onEndSearch = () => {
    console.log("the search ended" + " " + searchText);
  };

  return (
    <View style={styles.parentView}>
      <SearchBar
        searchText={searchText}
        changeSearchText={changeSearchText}
        onEndSearch={onEndSearch}
      />
      <Text>this is search screen</Text>
      <Text>{searchText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
