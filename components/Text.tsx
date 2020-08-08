import * as React from "react";
import {
  Text as RNText,
  View,
  StyleSheet,
  TextStyle,
  TextProps,
} from "react-native";
import { useAppContext } from "../context/Context";

interface Props {
  text: string;
  style?: TextStyle;
}

const Text = ({ text, style }: Props) => {
  const { colors } = useAppContext();
  return (
    <RNText style={{ ...styles.text, color: colors.text, ...style }}>
      {text}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Text;
