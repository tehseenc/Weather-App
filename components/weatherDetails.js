import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function WeatherDetails({
  feelsLike,
  low,
  high,
  humidity,
  windSpeed,
}) {
  const temps = [low, feelsLike, high]; //create array to map for days temps
  const conditions = [humidity, windSpeed]; //create array to map for weather conditions

  const printDetailTemps = temps.map((temp, index) => {
    //map to return each item in the temps array
    const title = ["low", "feels like", "high"];
    return (
      <React.Fragment key={index}>
        <View style={styles.detailGridItem}>
          <Text style={styles.descriptionTitle}>{title[index]}</Text>
          <Text style={styles.descriptionTemp}>{temp}°</Text>
        </View>
      </React.Fragment>
    );
  });

  const printDetailConditions = conditions.map((condition, index) => {
    //map to return each item in the weather conditions array
    const title = ["humidity", "wind speed"];
    return (
      <React.Fragment key={index}>
        <View style={styles.detailGridItem}>
          <Text style={styles.descriptionTitle}>{title[index]}</Text>
          <Text style={styles.descriptionTemp}>
            {condition}
            {index == 0 ? "%" : " m/s"}
          </Text>
        </View>
      </React.Fragment>
    );
  });

  return (
    <View style={styles.verticalContainer}>
      <View style={styles.horizontalContainer}>{printDetailTemps}</View>
      <View style={styles.horizontalContainer}>{printDetailConditions}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    marginTop: 30,
  },
  horizontalContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  detailGridItem: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  descriptionTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionTemp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
