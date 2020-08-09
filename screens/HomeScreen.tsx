import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAppContext } from "../context/Context";
import { Header, Categories, NewsArticles } from "../components";
import { key } from "../apikey";
import { NewsObj, TabParamList, HomeStackParamList } from "../types";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

interface HomeScreenNavigationProp {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, "Home">,
    StackNavigationProp<HomeStackParamList, "News">
  >;
  route: RouteProp<TabParamList, "Home">;
}

const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {
  const { colors } = useAppContext();
  const [news, setNews] = useState<Array<NewsObj>>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    fetchLatestNews();
  }, [category]);

  const setActiveCategory = (name: string) => {
    setCategory(name);
  };

  const fetchLatestNews = async () => {
    setNews([]);
    try {
      let response;
      if (!category || category === "all") {
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
        );
      } else {
        response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`
        );
      }

      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      Alert.alert("", "Try again later");
    }
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <FlatList
        keyExtractor={() => Math.random().toString()}
        data={[""]}
        ListHeaderComponent={() => (
          <Header title="News" navigation={navigation} />
        )}
        renderItem={({ item }) => (
          <Categories setActiveCategory={setActiveCategory} />
        )}
        ListFooterComponent={() => (
          <NewsArticles
            category={category}
            news={news}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default HomeScreen;
