import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

interface CategoriesProps {
  setActiveCategory: (name: string) => void;
}

const Categories = ({ setActiveCategory }: CategoriesProps) => {
  const categories = [
    {
      name: "Sports",
      icon: <Ionicons name="ios-basketball" size={30} color="#fff" />,
    },
    {
      name: "Entertainment",
      icon: <Ionicons name="ios-musical-notes" size={30} color="#fff" />,
    },
    {
      name: "Technology",
      icon: <Feather name="smartphone" size={30} color="#fff" />,
    },
    {
      name: "Science",
      icon: <AntDesign name="team" size={30} color="#fff" />,
    },
    {
      name: "Health",
      icon: <MaterialIcons name="healing" size={30} color="#fff" />,
    },
    {
      name: "Business",
      icon: <MaterialIcons name="business-center" size={30} color="#fff" />,
    },
  ];

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
