import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { useAppContext } from "../context/Context";
import { Text } from "../components";

const HomeScreen: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  const { colors } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <TouchableOpacity onPress={() => navigation.navigate("News")}>
        <Text text="HomeScreen" />
      </TouchableOpacity>
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

export default HomeScreen;
