import { StyleSheet, Text, View, Image } from "react-native";

export default function WeatherDisplay({
  weatherIcon,
  currentTemp,
  weatherDescription,
}) {
  //This component displays the main weather info
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.temperatureText}>{currentTemp}° C</Text>
      </View>
      <Text style={styles.description}>{weatherDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  weatherIcon: { width: 100, height: 100 },
  temperatureText: {
    color: "white",
    fontSize: 60,
  },
  description: {
    color: "white",
    fontSize: 26,
  },
});
