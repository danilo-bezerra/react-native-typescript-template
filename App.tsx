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

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar />
      <VStack flex={1} p={4} bg="gray.600">
        <Heading textAlign="center" color="gray.100" py={10}>
          Hello world
        </Heading>
      </VStack>
    </NativeBaseProvider>
  );
}
