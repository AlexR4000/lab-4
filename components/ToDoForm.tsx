import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface ToDoFormProps {
  onAddTask: (task: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    onAddTask(newTask);
    setNewTask(""); // clear input
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Add a new task..."
        style={styles.input}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 20, gap: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
});

export default ToDoForm;
