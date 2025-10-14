import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AboutScreen from "../screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tabs with Navbar */}
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      
      {/* Extra pages outside tabs */}
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
