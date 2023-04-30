import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
  },

  title: {
    color: theme.colors.base_2,
    fontSize: theme.sizes.s,
  },
});
