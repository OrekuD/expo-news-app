import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useAppContext } from "../context/Context";
import { Text } from "../components";

interface FavouriteArticlesProps {}

const FavouriteArticles = (props: FavouriteArticlesProps) => {
  const { savedArticles } = useAppContext();
  return (
    <View style={styles.container}>
      <FlatList
        data={savedArticles}
        renderItem={({ item }) => (
          <View>
            <Text text="Article" />
          </View>
        )}
        keyExtractor={() => Math.random().toString()}
        ListEmptyComponent={() => (
          <View>
            <Text text="No saved articles" />
          </View>
        )}
      />
    </View>
  );
};

export default FavouriteArticles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
