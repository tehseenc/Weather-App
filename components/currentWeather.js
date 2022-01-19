import { StyleSheet, Text, View } from "react-native";
import WeatherDisplay from "./weatherDisplay";
import WeatherDetails from "./weatherDetails";

export default function CurrentWeather({ weatherData, city }) {
  //This component displays the page weather information
  //   console.log(weatherData.current);
  const weatherIcon = weatherData?.current.weather[0].icon;
  const currentTemp = weatherData?.current.temp;
  const weatherDescription = weatherData?.current.weather[0].description;

  const todaysWeather = weatherData.daily[0];
  const feelsLike = weatherData.current.feels_like;
  const low = todaysWeather.temp.min;
  const high = todaysWeather.temp.max;
  const humidity = weatherData.current.humidity;
  const windSpeed = weatherData.current.wind_speed;

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.CityName}>{city}</Text>
      <WeatherDisplay
        weatherIcon={weatherIcon}
        currentTemp={currentTemp}
        weatherDescription={weatherDescription}
      />
      <WeatherDetails
        feelsLike={feelsLike}
        low={low}
        high={high}
        humidity={humidity}
        windSpeed={windSpeed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CityName: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },
});
