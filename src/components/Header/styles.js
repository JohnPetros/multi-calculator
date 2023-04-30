import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "flex-start",
    marginBottom: 20,
  },

  backButton: {
    padding: 8,
    marginRight: 8,

  },

  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.m,
  },

  underline: {
    backgroundColor: theme.colors.primary,
    height: 3,
  },
});
