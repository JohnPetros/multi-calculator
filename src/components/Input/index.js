import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../utils/theme";

export function Input({
  units,
  currentUnit,
  setCurrentUnit,
  exchangeInputSelection,
}) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function handleUnitPress(name, abbr) {
    setCurrentUnit((unit) => ({ ...unit, name, abbr }));
    setIsSelectOpen(false);
  }

  function handleSelectPress() {
    setIsSelectOpen(!isSelectOpen);
  }

  function handleInputPress() {
    if (currentUnit.isSelected) {
      return;
    }
    exchangeInputSelection();
  }

  return ( 
    <View style={styles.container} onStartShouldSetResponder={handleInputPress}>
      <Text style={styles.label}>{currentUnit.name}</Text>
      <View
        
        style={[
          styles.content,
          {
            borderColor:
              theme.colors[currentUnit.isSelected ? "primary" : "background"],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handleSelectPress}
          activeOpacity={0.7}
        >
          <Ionicons
            name={`arrow-${isSelectOpen ? "up" : "down"}`}
            size={24}
            color={theme.colors.primary}
          />
          <Text style={styles.abbreviation}>{currentUnit.abbr}</Text>
        </TouchableOpacity>
        <ScrollView horizontal style={{ width: "100%" }}>
          <TextInput value={currentUnit.value} style={styles.input} readOnly />
        </ScrollView>
      </View>
      {isSelectOpen && (
        <ScrollView style={styles.select}>
          {units.map(({ name, abbr }) => (
            <TouchableOpacity
              key={abbr}
              style={styles.unit}
              onPress={() => handleUnitPress(name, abbr)}
              activeOpacity={0.7}
            >
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.abbr}>{abbr}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
