import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.todo_Container}>
        <Text style={styles.todo_Item}>Buy GPU</Text>
        <Text style={styles.todo_Item}>Buy CPU</Text>
        <Text style={styles.todo_Item}>Buy Motherboard</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddTodo")}
      >
        {/* FIXED ICON is HERE */}
        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text style={styles.buttonText}> Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 20,
  },

  todo_Container: {
    width: 350,
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#8fd9fb",
    paddingTop: 60,
    alignItems: "center",
  },

  todo_Item: {
    backgroundColor: "#ec1212",
    fontSize: 20,
    color: "#FFFFFF",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  button: {
    width: 350,
    backgroundColor: "#4dff56",
    padding: 10,
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 5,
  },
});