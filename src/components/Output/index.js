import { View, Text } from "react-native";
import { styles } from "./styles";

export function Output({ value, unit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}
