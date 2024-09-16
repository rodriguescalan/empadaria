import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

// Define os tipos das propriedades do componente
interface AccountantInputProps {
  isFractional: boolean;
  defaultValue?: string;
  onChange: (value: string) => void;
}

const AccountantInput: React.FC<AccountantInputProps> = ({
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

  // Função para incrementar a quantidade
  const handleIncrement = () => {
    setQuantity((prev) => {
      if (isFractional) {
        return (parseFloat(prev) + 1).toFixed(3);
      }
      return (parseInt(prev) + 1).toString();
    });
  };

  // Função para decrementar a quantidade
  const handleDecrement = () => {
    setQuantity((prev) => {
      if (isFractional) {
        return (parseFloat(prev) - 1).toFixed(3);
      }
      return (parseInt(prev) - 1).toString();
    });
  };

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
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <View style={styles.container}>
        <Button title="  -  " onPress={handleDecrement} />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quantity}
          onChangeText={handleInputChange}
        />
        <Button title="  +  " onPress={handleIncrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  input: {
    width: "30%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    margin: 8,
  },
  button: {
    width: 40,
    height: 40,
  },
});

export default AccountantInput;
