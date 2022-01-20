import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import CurrentWeather from "./currentWeather";
import background from "../assets/background.png";
import SearchBar from "./searchBar";
import AppLoading from "expo-app-loading";
import WeekView from "./weekView";

export default function WeatherHome() {
  //set states for location
  const [lat, setLat] = useState(37.7749);
  const [long, setLong] = useState(122.4194);
  const [city, setCity] = useState("San Francisco");

  //set state for fetched weather data
  const [weatherData, setWeatherData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const APIkey = "a0fc3536db9cf6e42ab5390b36db71ad"; //weatherAPI key
  const excludeData = "minutely,hourly,alerts"; //exclusion for specific types of weather data that we dont need

  const updateCityStateInChild = (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    //component did update when lat and long changes
    fetch(
      //api call for weather data using lat and long
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${excludeData}&units=metric&appid=${APIkey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaded(true); //when data is loaded set loaded to true so app can render
      });
  }, [lat, long]);

  useEffect(() => {
    //component did update when lat and long changes
    fetch(
      //api call to set the lat and long from the city name
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data[0].lat);
        setLong(data[0].lon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  //only load app once the data is initialized to avoid loading empty screen/get error
  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={background} style={styles.imageBackground} />
        <SafeAreaView style={styles.container}>
          <SearchBar updateCityState={updateCityStateInChild} />
          <CurrentWeather weatherData={weatherData} city={city} />
          <WeekView dailyWeather={weatherData.daily} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
