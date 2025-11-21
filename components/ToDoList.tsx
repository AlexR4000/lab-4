import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface ToDoListProps {
  tasks: string[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View
          style={[
            styles.taskItem,
            { backgroundColor: index % 2 === 0 ? "#e0e0e0" : "#fff" },
          ]}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  taskItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
});

export default ToDoList;
