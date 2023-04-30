import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 24,
    minWidth: 350,
    borderWidth: 1,
    borderBottomColor: theme.colors.primary,
  },

  value: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.l,
    color: theme.colors.base_1,
    marginRight: 4,
  },

  unit: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.m,
    color: theme.colors.primary,
  },
});
