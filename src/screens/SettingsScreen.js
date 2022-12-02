import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToHome("Home")} title="Ir a Home" />
    </SafeAreaView>
  );
}
