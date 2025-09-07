import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { HistoryContext } from "../context/historyContext";

export default function Calculator({ navigation }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const { addToHistory } = useContext(HistoryContext);

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
    addToHistory(expression); 
  };

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
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
      </View>

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}

      <Button title="History" onPress={() => navigation.navigate("History")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 200,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    width: 120,
    marginVertical: 10,
  },
  result: {
    fontSize: 18,
    marginVertical: 10,
  },
});
