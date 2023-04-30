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
    marginTop: 4,
  },
});
