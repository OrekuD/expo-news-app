import * as React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";

const NewsWeb: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  const { url } = route.params;

  const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    </View>
  );
};

export default NewsWeb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
