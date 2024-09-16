import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

interface ItemListProps {
  name: string;
  quantity: number;
  minQuantity: number;
  onEdit: () => void;
}

export default function StockItemList({
  name,
  quantity,
  minQuantity,
  onEdit,
}: ItemListProps) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{gap: 8}}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
          <View>
            <Text>Quantidade atual: {quantity}</Text>
            <Text>Quantidaed mínima: {minQuantity}</Text>
            <Text style={{fontWeight: 'bold'}}>Recomendação de compra {minQuantity - quantity}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          {/* <TouchableOpacity onPress={onEdit}>
            <Ionicons
              name="pencil"
              size={24}
              color="#007aff"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity> */}
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
