import ItemList from "@/components/itemList";
import styles from "@/constants/styles";
import { deleteCategory, getCategories } from "@/services/categoryService";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Alert, ToastAndroid } from "react-native";

export default function Caregory() {
  const [categories, setCategories] = useState<any[]>([]);
  const isFocused = useIsFocused();
  const router = useRouter();

  const handleLoadData = () => {
    const data = getCategories();
    setCategories(data);
  };

  const handleDelete = (id: number) => {
    Alert.alert(
      "Deletar categoria",
      "Tem certeza de que deseja excluir esta categoria?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            try {
              deleteCategory(id);
              handleLoadData();
            } catch (error) {
              ToastAndroid.show(
                "Não foi possível deletar a categoria, possui produtos associados",
                ToastAndroid.SHORT
              );
            }
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
        {categories.map((category) => (
          <ItemList
            key={category.id}
            name={category.name}
            onDelete={handleDelete.bind(null, category.id)}
            onEdit={() => {
              router.setParams({ id: category.id });
              // @ts-ignore
              router.navigate(`/category/editCategory/${category.id}`);
            }}
          />
        ))}
      </View>
    </View>
  );
}
