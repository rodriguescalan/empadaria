import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

interface ItemListProps {
  name: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ItemList({ name, onEdit, onDelete }: ItemListProps) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={onEdit}>
            <Ionicons
              name="pencil"
              size={24}
              color="#007aff"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Ionicons
              name="trash"
              size={24}
              color="#f35469"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d3d3d3",
          borderBottomWidth: 1,
          width: "100%",
        }}
      />
    </>
  );
}
