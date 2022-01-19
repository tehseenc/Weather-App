import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./components/navigation.js";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
