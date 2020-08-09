import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  FlatList,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { width, height } from "../constants/Layout";
import { Card } from "../components";
import { NewsObj } from "../types";
import { key } from "../apikey";
import { useAppContext } from "../context/Context";

const SearchScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const [searchTerm, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<NewsObj>>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const { colors, toggleTabbar, darkTheme } = useAppContext();

  useEffect(() => {
    toggleTabbar(false);

    return () => {
      toggleTabbar(true);
    };
  }, []);

  const searchForMovies = async () => {
    setSearchResults([]);
    setIsSearching(true);
    if (searchTerm.trim().length === 0) {
      return;
    }
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${searchTerm.toLocaleLowerCase()}&apiKey=${key}`,
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        }
      );
      const data = await response.json();
      if (data.articles.length === 0) {
        setNoResults(true);
        setIsSearching(false);
      } else {
        setSearchResults(data.articles);
        setIsSearching(false);
        setNoResults(false);
      }
    } catch (error) {
      Alert.alert("Slow network", "Check your network and try again");
      console.log(error);
    }
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <TextInput
        style={{
          ...styles.textInput,
          backgroundColor: darkTheme ? "rgba(1, 1, 1, 0.5)" : "#212121",
        }}
        returnKeyType="search"
        placeholder="Search for news by terms..."
        value={searchTerm}
        onChangeText={(text) => {
          setSearchResults([]);
          setSearch(text);
          setIsSearching(true);
        }}
        onSubmitEditing={searchForMovies}
        autoFocus
      />
      {isSearching && searchResults.length === 0 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.text} />
        </View>
      ) : (
        <View style={styles.searchResults}>
          {noResults ? (
            <View
              style={{
                height: height,
                width: width,
                alignItems: "center",
                paddingTop: 200,
              }}
            >
              <Text style={styles.text}> No results found </Text>
            </View>
          ) : (
            <>
              <Text style={{ ...styles.text, color: colors.text }}>
                {"  "}
                Search results for{" "}
                <Text style={{ fontWeight: "bold", color: colors.text }}>
                  {searchTerm}{" "}
                </Text>
              </Text>
              <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                  <Card item={item} navigation={navigation} />
                )}
                keyExtractor={({ title }) => title}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => <View style={{ height: 120 }} />}
              />
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
    paddingHorizontal: 10,
  },
  textInput: {
    width: width * 0.95,
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 20,
    alignSelf: "center",
    color: "#ffffff",
    marginTop: 15,
  },
  searchResults: {
    paddingTop: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    paddingTop: 150,
  },
});

export default SearchScreen;
