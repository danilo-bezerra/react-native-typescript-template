import { Heading, VStack } from "native-base";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function HomeScreen() {
  return (
    <VStack flex={1} p={4} bg="gray.600">
      <Heading textAlign="center" color="gray.100" pb={10}>
        Home Screen
      </Heading>
      <Input placeholder="Enter Your Name..." mb={4} />
      <Button title="Click" />
    </VStack>
  );
}
