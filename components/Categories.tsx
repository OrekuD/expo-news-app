import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} />}
        horizontal
        keyExtractor={({ name }) => name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <CategoryItem header item={{ name: "All" }} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
  },
});
