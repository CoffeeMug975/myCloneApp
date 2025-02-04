// Created by: Moyo IV, Terrill
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [inputText, setInputText] = useState(""); // Stores typed text

  // Function to send a message
  const sendMessage = () => {
    if (inputText !== "") { // Only send if not empty
      setMessages([...messages, { id: Date.now().toString(), text: inputText }]);
      setInputText(""); // Clear input
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      {/* Input Box & Send Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Basic Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Dark background
    padding: 10,
  },
  messageBubble: {
    backgroundColor: "white", // Messages are white
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    color: "white",
  },
  sendButton: {
    marginLeft: 5,
    padding: 10,
    backgroundColor: "green",
  },
  sendButtonText: {
    color: "white",
  },
});

export default ChatScreen;
 