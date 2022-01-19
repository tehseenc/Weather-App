import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

//search bar to type city
export default function SearchBar({ updateCityState }) {
  const [userInput, setUserInput] = useState();
  const onChangeUserInput = (text) => {
    setUserInput(text);
  };
  const changeCity = (userInput) => {
    updateCityState(userInput);
  }; //set city to user input, then sets state back in main component for city
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.searchBar}
        onChangeText={onChangeUserInput}
        value={userInput}
        placeholder="City"
      />
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            changeCity(userInput);
          }}
        >
          <Text>Get Weather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    width: 300,
    marginVertical: 25,
    alignItems: "center",
  },
  searchBar: {
    borderRadius: 10,
    borderColor: "black",
    width: 200,
    backgroundColor: "white",
    marginRight: 5,
    height: 40,
    padding: 10,
  },
  button: {
    height: 30,
    width: 95,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
