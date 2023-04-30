import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { buttons } from "../../utils/buttons";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../utils/theme";
const iconSize = 48;

export function Home() {
  const navigation = useNavigation();

  function handleButtonPress(title, screenName, measureName = null) {
    navigation.navigate(screenName, { title, measureName });
  }

  return (
    <Container>
      <Header
        title={"Escolha a calculadora ou conversor"}
        hasBackButton={false}
      />
      <View style={styles.content}>
        {buttons.map(({ title, screenName, icon, measureName }) => (
          <View key={title} style={styles.button}>
            <Button
              columns={3}
              margin={12}
              onPress={() => handleButtonPress(title, screenName, measureName)}
            >
              <Ionicons
                name={icon}
                size={iconSize}
                color={theme.colors.primary}
              />
            </Button>
            <Text style={styles.title}>{title}</Text>
          </View>
        ))}
      </View>
    </Container>
  );
}
