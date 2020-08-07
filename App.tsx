import * as React from "react";
import {} from "react-native";
import MainNavigator from "./navigation/Navigator";
import Provider from "./context/Context";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

const App = () => {
  let [fontsLoaded] = useFonts({
    Heebo: require("./assets/fonts/Heebo-VariableFont_wght.ttf"),
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
