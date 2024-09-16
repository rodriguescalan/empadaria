import FormInput from "@/components/formInput";
import styles from "@/constants/styles";
import { getCategoryById, updateCategory } from "@/services/categoryService";
import { useIsFocused } from "@react-navigation/native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

export default function EditCategory() {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const data: any = getCategoryById(Number(id));
    setName(data.name);
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
        <FormInput label={"Nome"} onChange={(e) => setName(e)} value={name}/>
        <Button
          title={"Salvar"}
          onPress={() => {
            updateCategory({ id: Number(id), name });
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}
