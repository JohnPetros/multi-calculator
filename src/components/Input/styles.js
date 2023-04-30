import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 32,
  },

  label: {
    color: theme.colors.base_3,
    fontSize: theme.sizes.s,
    alignSelf: "flex-end",
    fontFamily: theme.fonts.regular,
  },

  content: {
    marginTop: 8,
    backgroundColor: theme.colors.base_4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 8,
    height: 64,
    borderWidth: 1,
  },

  button: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: theme.colors.background,
    minWidth: 80,
    height: 50,
    borderRadius: 25,
    padding: 8,
    marginRight: 8,
  },

  abbreviation: {
    color: theme.colors.primary,
    fontSize: theme.sizes.m,
    marginHorizontal: 8,
  },

  title: {
    color: theme.colors.base_3,
    fontSize: theme.sizes.s,
    fontFamily: theme.fonts.regular,
  },

  input: {
    color: theme.colors.base_2,
    fontSize: theme.sizes.l,
    fontFamily: theme.fonts.regular,
    marginTop: 8,
    marginLeft: 8,
  },

  select: {
    backgroundColor: theme.colors.background,
    elevation: 2,
    maxHeight: 380,
  },

  unit: {
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.base_2,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    color: theme.colors.base_2,
    fontSize: theme.sizes.s,
    fontFamily: theme.fonts.regular,
  },

  abbr: {
    color: theme.colors.primary,
    fontSize: theme.sizes.s,
    fontFamily: theme.fonts.regular,
  },
});
