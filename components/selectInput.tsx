import styles from "@/constants/styles";
import React from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface SelectInputProps {
  label: string;
  defaultValue?: { label: string; value: string | number };
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const SelectInput = ({ label, defaultValue, items, onChange }: SelectInputProps) => {
  return (
    <View style={[styles.inputGroup, { marginBottom: 10 }]}>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect style={{}} onValueChange={onChange} placeholder={defaultValue} items={items} />
    </View>
  );
};
