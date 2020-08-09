import * as React from "react";
import {} from "react-native";
import MainNavigator from "./navigation/Navigator";
import Provider from "./context/Context";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

const App = () => {
  let [fontsLoaded] = useFonts({
    HeeboR: require("./assets/fonts/Heebo-Regular.ttf"),
    HeeboB: require("./assets/fonts/Heebo-Bold.ttf"),
    HeeboM: require("./assets/fonts/Heebo-Medium.ttf"),
    HeeboT: require("./assets/fonts/Heebo-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider>
        <MainNavigator />
      </Provider>
    );
  }
};

export default App;
