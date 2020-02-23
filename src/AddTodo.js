import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Нельзя добавить пустую задачу");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите задачу"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button style={styles.button} title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
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
