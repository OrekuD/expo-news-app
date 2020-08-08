import * as React from "react";
import { View, StyleSheet, FlatList, Platform, StatusBar } from "react-native";
import { useAppContext } from "../context/Context";
import { Text, Card, Header } from "../components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const FavouriteArticles: React.FC<BottomTabScreenProps<{}>> = ({
  navigation,
}) => {
  const { savedArticles, colors } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <FlatList
        data={savedArticles}
        ListHeaderComponent={() => <Header noIcon title="Saved Articles" />}
        contentContainerStyle={{ flex: 1 }}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={() => Math.random().toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyContent}>
            <Text text="No saved articles" style={styles.emptyContentText} />
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
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    marginVertical: 20,
  },
  emptyContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContentText: {
    fontSize: 20,
    fontFamily: "HeeboM",
  },
});
