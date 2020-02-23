import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = props => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button style={styles.button} title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: "70%",
    paddingHorizontal: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    borderRadius: 4
  }
});
