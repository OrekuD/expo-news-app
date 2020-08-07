import * as React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";
import { useAppContext } from "../context/Context";

const NewsWeb: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  const { activeNews } = useAppContext();
  // const { url } = route.params;

  const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: activeNews?.url }}
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
