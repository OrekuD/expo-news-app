import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
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
  const { urlToImage, title, description } = item;
  return (
    <RectButton
      onPress={() => navigation.navigate("News", { item })}
      style={{ ...styles.container, backgroundColor: colors.deep }}
    >
      <Image
        source={{ uri: urlToImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text text={title} />
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    width: "45%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  content: {
    width: "55%",
    height: "100%",
    padding: 5,
  },
});

export default Card;
