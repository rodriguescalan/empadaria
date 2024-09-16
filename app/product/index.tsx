import ItemList from "@/components/itemList";
import styles from "@/constants/styles";
import { deleteProduct, getProducts } from "@/services/productService";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

export default function Product() {
  const [products, setProducts] = useState<any[]>([]);
  const isFocused = useIsFocused();
  const router = useRouter();

  const handleLoadData = () => {
    const data = getProducts();
    setProducts(data);
  };

  const handleDelete = (id: number) => {
    Alert.alert(
      "Excluir Produto",
      "Tem certeza de que deseja excluir este produto?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteProduct(id);
            handleLoadData();
          },
        },
      ]
    );
  };

  useEffect(() => {
    handleLoadData();
  }, [isFocused]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Ionicons name="search" size={20} />
        <TextInput style={styles.searchInput} />
      </View>
      <View>
        {products.map((product) => (
          <ItemList
            key={product.id}
            name={product.name}
            onDelete={handleDelete.bind(null, product.id)}
            onEdit={() => {
              // @ts-ignore
              router.navigate(`/product/editProduct/${product.id}`);
            }}
          />
        ))}
      </View>
    </View>
  );
}
