import styles from "@/constants/styles";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface CheckboxProps {
  label: string;
  defaultValue?: boolean;
  onChange: (value: boolean) => void;
}

export default function InputCheckbox({ label, defaultValue, onChange }: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setChecked(defaultValue ? true : false);
    }
  }, [defaultValue]);


  return (
    <View
      style={[
        styles.inputGroup,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 10,
        },
      ]}
    >
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(e) => {
          setChecked(e);
          onChange(!isChecked);
        }}
        color={isChecked ? "#007aff" : undefined}
      />
      <Text style={[styles.label, { marginTop: 0 }]}>{label}</Text>
    </View>
  );
}
