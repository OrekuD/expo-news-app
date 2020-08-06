import * as React from "react";
import {} from "react-native";
import MainNavigator from "./navigation/Navigator";
import Provider from "./context/Context";

const App = () => {
  return (
    <Provider>
      <MainNavigator />
    </Provider>
  );
};

export default App;
