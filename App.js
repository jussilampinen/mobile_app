import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);
    if (op === "+") {
      setResult(a + b);
    } else if (op === "-") {
      setResult(a - b);
    }
  }

  return (
     <View style={styles.container}>
      <Text style={styles.title}>Laskin</Text>

      <TextInput
        style={styles.input}
        placeholder="Ensimmäinen numero"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Toinen numero"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button title="+" onPress={() => calculate("+")} />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={() => calculate("-")} />
        </View>
      </View>

      {result !== null && <Text style={styles.result}>Tulos: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
