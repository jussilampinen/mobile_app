import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet, FlatList, } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);
    let res = null;
    let expression = "";
    if (op === "+") {
      res = a + b;
      expression = `${a} + ${b} = ${res}`;
    } else if (op === "-") {
      res = a - b;
      expression = `${a} - ${b} = ${res}`;
    }

    setResult(res);
    setHistory([...history, expression]);
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

      <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", width: "20%" }}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
      </View>

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}

      <View style={{ flex: 1, height: 20 }}>
        <Text style={{ fontWeight: "bold"}}>History</Text>
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
});
