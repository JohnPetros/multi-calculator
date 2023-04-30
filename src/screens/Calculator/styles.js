import { StyleSheet, Dimensions } from "react-native";
import theme from "../../utils/theme";
const SCREEN_WIDTH = Dimensions.get("screen").width;

const COLLUMNS = 4;
const SCREEN_HORIZONTAL_PADDING = (24 * 2) / 3;
const BUTTON_MARGIN_BETWEEN = 8;
export const BUTTON_SIZE =
  SCREEN_WIDTH / COLLUMNS - (SCREEN_HORIZONTAL_PADDING + BUTTON_MARGIN_BETWEEN);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12,
    paddingVertical: 36,
  },

  display: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    minWidth: SCREEN_WIDTH,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: theme.colors.base_4,
    elevation: 2,
    borderRadius: 8,
    marginBottom: 32,
  },

  result: {
    color: theme.colors.base_3,
    fontSize: theme.sizes.l,
    marginBottom: 24,
  },

  operation: {
    color: theme.colors.base_1,
    fontSize: theme.sizes.xl,
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: {
    backgroundColor: theme.colors.base_4,
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    margin: BUTTON_MARGIN_BETWEEN,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  activeButton: {
    backgroundColor: theme.colors.primary,
  },

  activeKey: {
    color: theme.colors.base_4,
  },

  key: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.l,
  },
});
