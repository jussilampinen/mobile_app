import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { HistoryContext } from "../context/historyContext";

export default function History() {
  const { history } = useContext(HistoryContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>

      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />

      {history.length === 0 && (
        <Text style={styles.noData}>No calculations yet</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    fontSize: 18,
    paddingVertical: 5,
  },
  noData: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});
