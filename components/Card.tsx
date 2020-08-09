import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useAppContext } from "../context/Context";
import { RectButton } from "react-native-gesture-handler";
import { NewsObj } from "../types";
import Text from "./Text";

interface Props {
  navigation: any;
  item: NewsObj;
}

const Card = ({ navigation, item }: Props) => {
  const { colors, setActiveNews } = useAppContext();
  const { urlToImage, title, description, url, publishedAt } = item;

  const openNews = () => {
    setActiveNews(item);
    navigation.navigate("News", { item });
  };

  return (
    <RectButton
      onPress={openNews}
      style={{ ...styles.container, backgroundColor: colors.deep }}
    >
      <View style={styles.content}>
        <Text text={title} style={styles.cardText} numberOfLines={3} />
        <Text
          text={new Date(publishedAt).toDateString()}
          style={styles.publishedText}
        />
      </View>
      {urlToImage ? (
        <Image
          source={{ uri: urlToImage }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{
            ...styles.image,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text text="No image" style={styles.cardText} numberOfLines={3} />
        </View>
      )}
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
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  content: {
    width: "55%",
    height: "100%",
    padding: 5,
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 18,
    fontFamily: "HeeboM",
  },
  publishedText: {
    fontSize: 14,
    fontFamily: "HeeboM",
    color: "grey",
  },
});

export default Card;
