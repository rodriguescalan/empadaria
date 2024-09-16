import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SQLiteProvider } from "expo-sqlite";
import { createTables } from "@/database/database";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SQLiteProvider databaseName="database.db" onInit={createTables}>
        <Drawer screenOptions={{ headerShown: false }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Início",
              headerShown: true,
              title: "Alerta de estoque",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="category"
            options={{
              drawerLabel: "Categorias",
              title: "Cadastro de categorias",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="clipboard" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="product"
            options={{
              drawerLabel: "Produtos",
              title: "Cadastro de produtos",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="cube" color={color} size={size} />
              ),
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons
                    name="add"
                    size={24}
                    color="#007aff"
                    style={{ marginRight: 20 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Drawer>
      </SQLiteProvider>
    </GestureHandlerRootView>
  );
}
