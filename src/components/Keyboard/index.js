import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../Button";
import { keys } from "../../utils/keys";
import { styles } from "./styles";
import theme from "../../utils/theme";

export function Keyboard({
  handleKeyPress,
  lastKeyPressed,
  isEspecial,
  isDefault = true,
}) {
  const [currentKeys, setCurrentKeys] = useState([]);

  function formatKeys(keys) {
    const formatedKeys = [...keys];

    formatedKeys.splice(0, 4);
    formatedKeys[formatedKeys.indexOf("×")] = "⇵";
    formatedKeys[formatedKeys.indexOf("+")] = "C";
    formatedKeys[formatedKeys.indexOf("−")] = "⌫";
    setCurrentKeys(formatedKeys);
  }

  useEffect(() => {
    console.log(isDefault);
    if (isDefault) {
      formatKeys(keys);
      return;
    }
    setCurrentKeys(keys);
  }, [isDefault]);

  return (
    <View style={styles.container}>
      {currentKeys.map((key) => (
        <Button
          key={key}
          columns={4}
          margin={8}
          isSpan={key === "="}
          isActive={lastKeyPressed === key}
          activeOpacity={0.7}
          onPress={() => handleKeyPress(key)}
        >
          {key !== "empty" && (
            <Text
              style={[
                styles.key,
                {
                  color:
                    theme.colors[
                      isEspecial(key) || key === "=" ? "primary" : "base_2"
                    ],
                },
                lastKeyPressed === key && styles.activeKey,
              ]}
            >
              {key}
            </Text>
          )}
        </Button>
      ))}
    </View>
  );
}
