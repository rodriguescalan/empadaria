import FormInput from "@/components/formInput";
import { addCategory } from "@/services/categoryService";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, View } from "react-native";

export default function NewCategory() {
  const [name, setName] = useState("");
  const navigation = useNavigation();

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
        <FormInput label={"Nome"} onChange={(e) => setName(e)}/>
        <Button title={"Salvar"} onPress={() => {
          addCategory({name})
          navigation.goBack()
        }} />
      </View>
    </View>
  );
}
