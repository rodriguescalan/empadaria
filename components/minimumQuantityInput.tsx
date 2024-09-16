import styles from "@/constants/styles";
import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";

// Define os tipos das propriedades do componente
interface MinimumQuantityInputProps {
  isFractional: boolean;
  defaultValue?: string;
  onChange: (value: string) => void;
}

const MinimumQuantityInput: React.FC<MinimumQuantityInputProps> = ({
  isFractional,
  defaultValue,
  onChange,
}) => {
  const [quantity, setQuantity] = useState<string>("0");

  useEffect(() => {
    onChange(quantity);
  }, [quantity]);

  useEffect(() => {
    if (defaultValue) {
      setQuantity(defaultValue);
    }
  }, [defaultValue]);


  // Função para lidar com a mudança no campo de input
  const handleInputChange = (value: string) => {
    if (isFractional) {
      // Permitir até 3 casas decimais se for fracionado
      if (/^\d*\.?\d{0,3}$/.test(value)) {
        setQuantity(value);
      }
    } else {
      // Permitir apenas números inteiros se não for fracionado
      if (/^\d*$/.test(value)) {
        setQuantity(value);
      }
    }
  };

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Quantidade mínima</Text>
      <TextInput
        style={styles.formInput}
        keyboardType="numeric"
        value={quantity}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default MinimumQuantityInput;
