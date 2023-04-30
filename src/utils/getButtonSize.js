import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;

export function getButtonSize(columns, margin) {
  const screenHorizontalPadding = (24 * 2) / (columns - 1);
  const buttonSize = screenWidth / columns - (screenHorizontalPadding + margin);
  return buttonSize;
}
