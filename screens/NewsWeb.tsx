import * as React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";

const NewsWeb: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  const { url } = route.params;
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default NewsWeb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
