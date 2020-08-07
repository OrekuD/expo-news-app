import * as React from "react";
import { View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useAppContext } from "../context/Context";
import Text from "./Text";

interface HeaderProps {
  navigation: any;
}

const Header = ({ navigation }: HeaderProps) => {
  const { colors } = useAppContext();
  return (
    <View style={styles.container}>
      <Text text="News" style={styles.title} />
      <BorderlessButton onPress={() => navigation.navigate("Search")}>
        <Feather name="search" color={colors.text} size={26} />
      </BorderlessButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
});
