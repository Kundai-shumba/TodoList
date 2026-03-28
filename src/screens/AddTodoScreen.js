import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddTodoScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Todo</Text>

      {/* Title Input */}
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        
        {/* Cancel */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close-circle-outline" size={20} color="white" />
          <Text style={styles.buttonText}> Cancel</Text>
        </TouchableOpacity>

        {/* Save */}
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="save-outline" size={20} color="white" />
          <Text style={styles.buttonText}> Save</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#8fd9fb",
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  cancelButton: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  saveButton: {
    backgroundColor: "#2ecc71",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
});