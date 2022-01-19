import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WeekView({ dailyWeather }) {
  const navigation = useNavigation();

  const openDayWeather = (day) => {
    navigation.navigate("Weather View", {
      day,
    });
  };

  dailyWeather = dailyWeather.slice(1, 5);

  const testArray = dailyWeather.map((day, index) => {
    console.log("new DAY:");
    console.log("day ", day.temp.day);
    console.log("min ", day.temp.min);
    console.log("max ", day.temp.max);
    console.log("feels like: ", day.feels_like.day);
    console.log("icon ", day.weather[0].icon);
    console.log("description ", day.weather[0].description);
    console.log("windspeed: ", day.wind_speed);
    console.log("humidity ", day.humidity);
    console.log(" ");

    const weatherIcon = day.weather[0].icon;
    const dayTemp = day.temp.day;

    return (
      <React.Fragment key={index}>
        <View style={styles.detailGridItem}>
          <TouchableOpacity
            onPress={() => {
              openDayWeather(day);
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
                }}
                style={styles.weatherIcon}
              />
              <Text style={styles.descriptionTemp}>{dayTemp}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  });

  //   const printWeek = temps.map((temp, index) => {
  //     const title = ["low", "feels like", "high"];
  //     return (
  //       <React.Fragment key={index}>
  //         <View style={styles.detailGridItem}>
  //           <Text style={styles.descriptionTitle}>{title[index]}</Text>
  //           <Text style={styles.descriptionTemp}>{temp}°</Text>
  //         </View>
  //       </React.Fragment>
  //     );
  //   });
  //   testArray;
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.horizontalContainer}>{testArray}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  weatherIcon: { width: 100, height: 100 },
  temperatureText: {
    color: "white",
    fontSize: 60,
  },
  descriptionTemp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
