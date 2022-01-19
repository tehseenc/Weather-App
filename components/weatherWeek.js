import { StyleSheet, Text, View } from "react-native";

export default function WeatherWeek() {
  return (
    <View style={styles.container}>
      <Text>Weather Week</Text>
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
});
