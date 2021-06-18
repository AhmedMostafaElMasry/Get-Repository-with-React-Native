import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import userScreen from "./src/screens/userScreen";
import RepoScreen from "./src/screens/repoScreen";

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen name='User' component={userScreen} />
        <HomeStack.Screen name='Repo' component={RepoScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
