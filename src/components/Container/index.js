import { SafeAreaView, StyleSheet } from "react-native";
import theme from "../../utils/theme";

export function Container({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12,
    paddingVertical: 36,
  },
});
