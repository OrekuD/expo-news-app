import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NewsObj } from "../types";
import Card from "./Card";
import { RectButton } from "react-native-gesture-handler";
import { useAppContext } from "../context/Context";

interface NewsArticlesProps {
  news: Array<NewsObj>;
  navigation: any;
}

const NewsArticles = ({ news, navigation }: NewsArticlesProps) => {
  const { colors } = useAppContext();
  return (
    <View style={{ flex: 1 }}>
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
          const { title, urlToImage } = news[0];
          return <RectButton style={styles.header}></RectButton>;
        }}
      />
    </View>
  );
};

export default NewsArticles;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    backgroundColor: "aqua",
    borderRadius: 5,
    marginBottom: 20,
  },
});
