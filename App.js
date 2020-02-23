import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const removeTodo = id => {
    setTodos(prev =>
      prev.filter(item => {
        return item.id !== id;
      })
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo}></Todo>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  mainContainer: {
    marginBottom: 230
  }
});
