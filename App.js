import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";
import NavigationTab2 from "./src/navigation/NavigationTab2";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <NavigationTab2 />
      <StatusBar style="auto" />
    </NavigationContainer>
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
