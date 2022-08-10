import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutScreen } from "../screens/AboutScreen";
import { HomeScreen } from "../screens/HomeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Screen
        name="about"
        component={AboutScreen}
        options={{
          title: "About",
        }}
      />
    </Navigator>
  );
}
