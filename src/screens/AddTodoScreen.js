import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddTodoScreen({ route, navigation }) {
  const { addTodo } = route.params;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Validation
    if (!title.trim() || !description.trim()) {
      Alert.alert("Error", "Todo Tittle or Description can't be empty");
      return;
    }

    // Add todo
    addTodo({
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    });

    // Success message
    Alert.alert("Success", "Todo Added Successfully");

    // set tittle and description
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Todo</Text>

      {/* Title */}
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle" size={20} color="white" />
          <Text style={styles.buttonText}> Back</Text>
        </TouchableOpacity>

        {/* Save */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="save" size={20} color="white" />
          <Text style={styles.buttonText}> Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fd9fb",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 5,
    height: 100,
    textAlignVertical: "top",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  backButton: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  saveButton: {
    backgroundColor: "#2ecc71",
    padding: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});