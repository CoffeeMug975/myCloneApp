// Created by: Moyo IV, Terrill
import React, { useState } from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const createdAlert = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={() => setVisible(true)} />

      {visible && (
        <TouchableOpacity
          style={styles.alertBox}
          onPress={() => setVisible(false)}
        >
          <Text style={styles.alertText}>Alert!</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 10,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
    marginBottom: 20,
  },
  alertText: {
    color: "white",
    fontSize: 14,
  },
});

export default createdAlert;