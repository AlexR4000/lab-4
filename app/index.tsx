import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

export default function Index() {
  const [tasks, setTasks] = useState<string[]>([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  const addTask = (newTask: string) => {
    if (!newTask.trim() || tasks.includes(newTask)) return;
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My ToDo List</Text>

      {/* Debug bar */}
      <View style={styles.debug}>
        <Text>Debug: {tasks.join(", ")}</Text>
      </View>

      <ToDoForm onAddTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  debug: { padding: 10, backgroundColor: "#f9f9f9", marginBottom: 20 },
});
// added debug bar to show current tasks that has been added using the addtask function
