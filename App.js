import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
