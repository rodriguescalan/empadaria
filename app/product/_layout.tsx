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
          title: "Produtos",
          headerRight: () => (
            <TouchableOpacity>
              {/* @ts-ignore */}
              <Link href={"/product/newProduct"}>
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
        name="newProduct"
        options={{ title: "Cadastro de produto" }}
      />
      <Stack.Screen
        name="editProduct/[id]"
        options={{ title: "Editar produto" }}
      />
    </Stack>
  );
}
