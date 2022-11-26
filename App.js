import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Saludar />
        <LoginForm />
        <StatusBar style="auto" />
      </View>
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
