import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(`Pressed: ${todo.title}`)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5
  }
});
