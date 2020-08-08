import * as React from "react";
import { View, StyleSheet, Switch } from "react-native";
import { useAppContext } from "../context/Context";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { width } from "../constants/Layout";
import { Text, Header } from "../components";
import { RectButton } from "react-native-gesture-handler";

const SettingsScreen = ({ navigation }: BottomTabScreenProps<{}>) => {
  const {
    colors,
    toggleTheme,
    darkTheme,
    linksInExternalBrowser,
    toggleLinks,
  } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Header title="Settings" noIcon />
      <View style={styles.content}>
        <View style={{ ...styles.card, backgroundColor: colors.deep }}>
          <Text text="Dark theme" style={styles.cardText} />
          <Switch value={darkTheme} onValueChange={toggleTheme} />
        </View>
        <View style={{ ...styles.card, backgroundColor: colors.deep }}>
          <Text text="Open links in an external browser" />
          <Switch value={linksInExternalBrowser} onValueChange={toggleLinks} />
        </View>
        <RectButton
          onPress={() => navigation.navigate("Animations")}
          style={{ ...styles.card, backgroundColor: colors.deep }}
        >
          <Text text="Animations" />
        </RectButton>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  content: {
    // flex: 1,
    // paddingTop: 20,
  },
  card: {
    width: width * 0.95,
    height: 55,
    borderRadius: 5,
    elevation: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
