import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("");
  //check is it number
  const ageIsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0;

  const lowHR: number = ageIsNumber ? (200 - ageIsNumber) * 0.65 : 0;
  const highHR: number = ageIsNumber ? (200 - ageIsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.textmargin}>Enter your age:</Text>
      <TextInput
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
        style={styles.input}
      ></TextInput>
      <Text style={styles.textmargin}>Lower limit: {lowHR.toFixed(2)} bpm</Text>
      <Text>Upper limit: {highHR.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    marginTop: 50,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    height: 40,
    marginTop: 5,
    borderWidth: 0.5, //border
    borderRadius: 5,
    padding: 10,
    width: 100,
  },
  textmargin: {
    marginTop: 15
  }
});
