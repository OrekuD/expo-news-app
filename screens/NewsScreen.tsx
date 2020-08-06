import React, { useEffect } from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import { useAppContext } from "../context/Context";
import { Text } from "../components";
import { height } from "../constants/Layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";

const NewsScreen = ({ navigation }: StackScreenProps<{}>) => {
  const { colors, toggleTabbar } = useAppContext();

  useEffect(() => {
    toggleTabbar(false);

    return () => {
      toggleTabbar(true);
    };
  }, []);

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <RectButton onPress={navigation.goBack} style={styles.backIcon}>
        <MaterialCommunityIcons name="chevron-left" color="#121212" size={30} />
      </RectButton>
      <View style={styles.imageContainer}></View>
      <View style={styles.content}>
        <Text text={new Date().toDateString()} style={styles.dateText} />
        <Text
          text="Deserunt duis incididunt eiusmod laborum pariatur reprehenderit voluptate enim laboris."
          style={styles.title}
        />
        <Text
          text="Deserunt duis incididunt eiusmod laborum pariatur reprehenderit voluptate enim laboris."
          style={{ fontSize: 16 }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={styles.icon} />
          <Text text="CNN" />
        </View>
        <View style={styles.row}>
          <BorderlessButton style={{ marginRight: 20 }}>
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={colors.text}
              size={34}
            />
          </BorderlessButton>
          <BorderlessButton>
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={colors.text}
              size={34}
            />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: height * 0.6,
    backgroundColor: "red",
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footer: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 40,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "pink",
    marginRight: 10,
  },
  sourceText: {
    fontSize: 16,
    color: "grey",
  },
  dateText: {
    fontSize: 18,
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    backgroundColor: "#ffffff",
  },
});

export default NewsScreen;
