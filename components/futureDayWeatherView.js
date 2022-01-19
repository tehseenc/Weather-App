import { StyleSheet, View, ImageBackground } from "react-native";
import WeatherDisplay from "./weatherDisplay";
import WeatherDetails from "./weatherDetails";
import background from "../assets/background.png";

export default function futureDayWeatherView({ route }) {
  //This component displays the page weather information
  //   console.log(weatherData.current);

  const day = route.params.day; //pull parameters from the route

  //set all variables for the days weather to display
  const weatherIcon = day.weather[0].icon;
  const currentTemp = day.temp.day;
  const weatherDescription = day.weather[0].description;

  const feelsLike = day.feels_like.day;
  const low = day.temp.min;
  const high = day.temp.max;
  const humidity = day.humidity;
  const windSpeed = day.wind_speed;

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.imageBackground} />
      <View style={styles.dataContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  dataContainer: {
    marginTop: 70,
  },
  imageBackground: {
    //style for background image of app
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
