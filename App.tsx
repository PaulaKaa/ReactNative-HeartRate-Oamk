import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("");
  //check is it number
  const ageIsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0;

  const lowHR: number = (200 - ageIsNumber) * 0.65;
  const highHR: number = (200 - ageIsNumber) * 0.85;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
        style={styles.input}
      ></TextInput>
      <Text>Lower limit {lowHR.toFixed(2)} bpm</Text>
      <Text>Upper limit {highHR.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    borderWidth: 0.5 }
});
