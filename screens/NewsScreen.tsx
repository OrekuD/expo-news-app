import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { useAppContext } from "../context/Context";
import { Text } from "../components";
import { height } from "../constants/Layout";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import * as WebBrowser from "expo-web-browser";

const NewsScreen = ({ navigation, route }: StackScreenProps<{}>) => {
  const {
    colors,
    toggleTabbar,
    activeNews,
    linksInExternalBrowser,
    addArticle,
    isSavedArticle,
    removeArticle,
  } = useAppContext();
  const [result, setResult] = useState<any>(null);
  const {
    urlToImage,
    publishedAt,
    description,
    source,
    title,
    url,
  } = activeNews;

  useEffect(() => {
    toggleTabbar(false);

    return () => {
      toggleTabbar(true);
    };
  }, []);

  const openLink = async () => {
    await WebBrowser.openBrowserAsync(url);
  };

  const manageFavourites = () => {
    isSavedArticle(activeNews)
      ? removeArticle(activeNews)
      : addArticle(activeNews);
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <RectButton onPress={navigation.goBack} style={styles.backIcon}>
        <MaterialCommunityIcons name="chevron-left" color="#121212" size={30} />
      </RectButton>
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: urlToImage }}
          style={styles.imageContainer}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text
            text={new Date(publishedAt).toDateString()}
            style={styles.dateText}
          />
          <Text text={title} style={styles.title} numberOfLines={4} />
          <Text text={description} style={{ fontSize: 18 }} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={styles.icon} />
          <Text text={source.name} />
        </View>
        <View style={styles.row}>
          <BorderlessButton
            onPress={manageFavourites}
            style={{ marginRight: 20 }}
          >
            {isSavedArticle(activeNews) ? (
              <MaterialCommunityIcons
                name="bookmark"
                color={colors.text}
                size={32}
              />
            ) : (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={colors.text}
                size={32}
              />
            )}
          </BorderlessButton>
          <BorderlessButton
            onPress={() => {
              linksInExternalBrowser
                ? openLink()
                : navigation.navigate("NewsWeb", { url });
            }}
          >
            <Feather name="arrow-up-right" color={colors.text} size={40} />
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
  },
  content: {
    flex: 1,
    padding: 10,
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
    fontFamily: "HeeboM",
    lineHeight: 50,
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
    marginBottom: 10,
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
