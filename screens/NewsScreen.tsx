import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../context/Context";

const NewsScreen = () => {
  const { colors } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Text>Newsscreen</Text>
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

export default NewsScreen;
