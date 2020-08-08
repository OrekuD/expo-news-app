import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";

interface CategoriesProps {
  setActiveCategory: (name: string) => void;
}

const Categories = ({ setActiveCategory }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem setActiveCategory={setActiveCategory} item={item} />
        )}
        horizontal
        keyExtractor={({ name }) => name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <CategoryItem
            setActiveCategory={setActiveCategory}
            header
            item={{ name: "All" }}
          />
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
