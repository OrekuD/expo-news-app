import * as React from "react";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Text from "./Text";

interface CategoryItemProps {
  item: { name: string; icon?: React.ReactNode };
  header?: boolean;
  setActiveCategory: (name: string) => void;
}

const CategoryItem = ({
  item: { name, icon },
  header,
  setActiveCategory,
}: CategoryItemProps) => {
  if (header) {
    return (
      <View style={styles.container}>
        <RectButton
          style={{ ...styles.header }}
          onPress={() => setActiveCategory("general")}
        >
          <View style={styles.row}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </RectButton>
        <Text text={name} style={styles.text} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RectButton
        style={styles.item}
        onPress={() => setActiveCategory(name.toLowerCase())}
      >
        {icon}
      </RectButton>
      <Text text={name} style={styles.text} />
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  item: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  header: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "grey",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dot: {
    backgroundColor: "white",
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
