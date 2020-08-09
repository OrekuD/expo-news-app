import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { NewsObj } from "../types";
import Card from "./Card";
import { RectButton } from "react-native-gesture-handler";
import { useAppContext } from "../context/Context";
import Text from "./Text";

interface NewsArticlesProps {
  news: Array<NewsObj>;
  navigation: any;
  category: string;
}

const NewsArticles = ({ news, navigation, category }: NewsArticlesProps) => {
  const { colors, setActiveNews } = useAppContext();
  const [firstArticle, setFirstArticle] = useState<NewsObj>();
  const openNews = () => {
    const item = news[0];
    setActiveNews(item);
    navigation.navigate("News", { item });
  };

  useEffect(() => {
    setFirstArticle(news[0]);
  }, [news]);

  return (
    <View style={{ flex: 1 }}>
      {category === "" || category === "general" ? (
        <Text text={`Latest news`} style={styles.title} />
      ) : (
        <Text text={`Latest ${category} news`} style={styles.title} />
      )}
      <FlatList
        data={news.slice(1, news.length - 1)}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={({ title }) => title}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color={colors.text} />
          </View>
        )}
        ListHeaderComponent={() => {
          if (firstArticle) {
            const { title, urlToImage, source } = firstArticle;
            if (!urlToImage) {
              setFirstArticle(news[1]);
            }
            return (
              <RectButton style={styles.header} onPress={openNews}>
                <Image
                  source={{ uri: urlToImage }}
                  style={{ flex: 1, borderRadius: 5 }}
                  resizeMode="cover"
                />
                <View style={styles.source}>
                  <Text text={source.name} style={styles.text} />
                </View>
              </RectButton>
            );
          } else {
            return <View />;
          }
        }}
      />
    </View>
  );
};

export default NewsArticles;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 220,
    borderRadius: 5,
    marginBottom: 20,
    position: "relative",
  },
  source: {
    position: "absolute",
    bottom: 10,
    right: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121212",
  },
  title: {
    fontSize: 30,
    fontFamily: "HeeboM",
    margin: 10,
  },
});
