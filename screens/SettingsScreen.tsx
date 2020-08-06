import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useAppContext } from "../context/Context";
import { Text } from "../components";

const SettingsScreen = () => {
  const { colors } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Text text="Settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
