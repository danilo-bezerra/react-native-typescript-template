import React from "react";
import {
  NativeBaseProvider,
  Box,
  VStack,
  StatusBar,
  Input,
  Heading,
} from "native-base";
import { THEME } from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      <StatusBar />
    </NativeBaseProvider>
  );
}
