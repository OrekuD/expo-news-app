import * as React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

interface NewsWebProps {
  url: string;
}

const NewsWeb = ({ url }: NewsWebProps) => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} style={{ marginTop: 10 }} />
    </View>
  );
};

export default NewsWeb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
  },
});
