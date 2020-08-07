import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { useAppContext } from "../context/Context";
import { Text, Card } from "../components";
import { key } from "../apikey";
import { NewsObj } from "../types";

const test = [
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
];

const HomeScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const { colors } = useAppContext();
  const [news, setNews] = useState<Array<NewsObj>>([]);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      Alert.alert("", "Try again later");
    }
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <FlatList
        data={news}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color={colors.text} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default HomeScreen;
