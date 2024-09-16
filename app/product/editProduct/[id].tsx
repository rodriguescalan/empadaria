import AccountantInput from "@/components/accountantInput";
import InputCheckbox from "@/components/checkBox";
import FormInput from "@/components/formInput";
import MinimumQuantityInput from "@/components/minimumQuantityInput";
import { SelectInput } from "@/components/selectInput";
import styles from "@/constants/styles";
import { getCategories } from "@/services/categoryService";
import { getProductById, updateProduct } from "@/services/productService";
import { useIsFocused } from "@react-navigation/native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function newProduct() {
  const navigation = useNavigation();
  const categoryList = getCategories();
  const isFocused = useIsFocused();
  const { id } = useLocalSearchParams();
  const items = categoryList.map((category: any) => {
    return { label: category.name, value: category.id };
  });

  const [product, setProduct] = useState({
    name: "",
    barcode: "",
    category_id: 0,
    fractional: false,
    quantity: 0,
    min_quantity: 0,
  });

  const category = items.find((item) => item.value === product.category_id);

  useEffect(() => {
    const data: any = getProductById(Number(id));
    setProduct(data);
  }, [isFocused]);

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <View style={{width: '100%'}}>
          <Text style={styles.label}>Código: {id}</Text>
        </View>
        <FormInput
          label={"Nome"}
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e })}
        />
        <FormInput
          label={"Códigos de barras"}
          value={product.barcode}
          onChange={(e) => setProduct({ ...product, barcode: e })}
        />
        <SelectInput
          label="Categoria"
          defaultValue={category}
          items={items}
          onChange={(e) => setProduct({ ...product, category_id: Number(e) })}
        />
        <InputCheckbox
          label="Quantidade fracionada"
          defaultValue={product.fractional}
          onChange={(e) => {
            setProduct({ ...product, fractional: e });
          }}
        />
        <AccountantInput
          isFractional={product.fractional}
          defaultValue={product.quantity.toString()}
          onChange={(e) => setProduct({ ...product, quantity: Number(e) })}
        />
        <MinimumQuantityInput
          isFractional={product.fractional}
          defaultValue={product.min_quantity.toString()}
          onChange={(e) => setProduct({ ...product, min_quantity: Number(e) })}
        />
        <Button
          title={"Salvar"}
          onPress={() => {
            updateProduct({...product, id: Number(id)});
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}
