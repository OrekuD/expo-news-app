import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useAppContext } from "../context/Context";
import Text from "./Text";
import { RectButton } from "react-native-gesture-handler";
import { NewsObj } from "../types";

interface Props {
  navigation: any;
  item: NewsObj;
}

const Card = ({ navigation, item }: Props) => {
  const { colors } = useAppContext();
  return (
    <RectButton
      onPress={() => navigation.navigate("News", { item })}
      style={{ ...styles.container }}
    >
      <Text text="Card" />
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Card;
