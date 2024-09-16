import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Link, Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Layout(props: any) {
  const nav = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Categorias",
          headerRight: () => (
            <TouchableOpacity>
              {/* @ts-ignore */}
              <Link href={"/category/newCategory"}>
                <Ionicons
                  name="add"
                  size={24}
                  color="#007aff"
                  style={{ marginRight: 20 }}
                />
              </Link>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => nav.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons
                name="menu"
                size={24}
                color="#007aff"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="newCategory"
        options={{ title: "Cadastro de categoria" }}
      />
      <Stack.Screen
        name="editCategory/[id]"
        options={{ title: "Editar categoria" }}
      />
    </Stack>
  );
}
