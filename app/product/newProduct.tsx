import AccountantInput from "@/components/accountantInput";
import InputCheckbox from "@/components/checkBox";
import FormInput from "@/components/formInput";
import MinimumQuantityInput from "@/components/minimumQuantityInput";
import { SelectInput } from "@/components/selectInput";
import { getCategories } from "@/services/categoryService";
import { addProduct } from "@/services/productService";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function newProduct() {
  const navigation = useNavigation();
  const categoryList = getCategories();
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
        <FormInput
          label={"Nome"}
          onChange={(e) => setProduct({ ...product, name: e })}
        />
        <FormInput
          label={"Códigos de barras"}
          onChange={(e) => setProduct({ ...product, barcode: e })}
        />
        <SelectInput
          label="Categoria"
          items={items}
          onChange={(e) => setProduct({ ...product, category_id: Number(e) })}
        />
        <InputCheckbox
          label="Quantidade fracionada"
          onChange={(e) => {
            setProduct({ ...product, fractional: e });
          }}
        />
        <AccountantInput
          isFractional={product.fractional}
          onChange={(e) => setProduct({ ...product, quantity: Number(e) })}
        />
        <MinimumQuantityInput
          isFractional={product.fractional}
          onChange={(e) => setProduct({ ...product, min_quantity: Number(e) })}
        />
        <Button
          title={"Salvar"}
          onPress={() => {
            addProduct(product);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}
