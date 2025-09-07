import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Calculator from "./components/calculator";
import History from "./components/history";
import { HistoryProvider } from "./context/historyContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HistoryProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </HistoryProvider>
  );
}
