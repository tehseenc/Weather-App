import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeatherHome from "./weatherHome";
import futureDayWeatherView from "./futureDayWeatherView";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//create navigation for home page and future weather detail page
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={WeatherHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Weather View"
        component={futureDayWeatherView}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    borderTopWidth: 1,
    paddingHorizontal: 35,
    paddingTop: 5,
  },
  imageBackground: {
    //style for background image of app
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
