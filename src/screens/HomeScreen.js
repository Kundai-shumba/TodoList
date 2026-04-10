import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const stored = await AsyncStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  };

  const saveTodos = async (updatedTodos) => {
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // add todo
  const addTodo = (newTodo) => {
    const todoWithState = {
      ...newTodo,
      completed: false,
      expanded: false,
    };

    setTodos((prev) => {
      const updated = [...prev, todoWithState];
      saveTodos(updated);
      return updated;
    });
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => {
      const updated = prev.filter((todo) => todo.id !== id);
      saveTodos(updated);
      return updated;
    });
  };

  // expand 
  const toggleExpand = (id) => {
    setTodos((prev) => {
      const updated = prev.map((todo) =>
        todo.id === id
          ? { ...todo, expanded: !todo.expanded }
          : todo
      );
      saveTodos(updated);
      return updated;
    });
  };

  // set as complete
  const markComplete = (id) => {
    setTodos((prev) => {
      const updated = prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: true }
          : todo
      );
      saveTodos(updated);
      return updated;
    });
  };

  // rendering each todo
  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      {/* Title + caret */}
      <View style={styles.row}>
        <Text style={styles.todoText}>
          {item.title} {item.completed ? "(Done)" : ""}
        </Text>

        <TouchableOpacity onPress={() => toggleExpand(item.id)}>
          <Ionicons
            name={item.expanded ? "chevron-up" : "chevron-down"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>

      {/* Expanded view */}
      {item.expanded && (
        <>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.controls}>
            {/* Tick */}
            {!item.completed && (
              <TouchableOpacity onPress={() => markComplete(item.id)}>
                <Ionicons name="checkmark-circle" size={24} color="green" />
              </TouchableOpacity>
            )}

            {/* Delete */}
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddTodo", { addTodo })}
      >
        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text style={styles.buttonText}> Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fd9fb",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
  },

  todoItem: {
    backgroundColor: "#ec1212",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  todoText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  description: {
    marginTop: 10,
    color: "white",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#4dff56",
    padding: 12,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 5,
  },
});