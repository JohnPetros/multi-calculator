import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import theme from "../../utils/theme";

export function Header({ title, hasBackButton = true }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={navigation.goBack}
        >
          <Ionicons
            name={"arrow-back-outline"}
            size={32}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.underline}></View>
      </View>
    </View>
  );
}
