import StockItemList from "@/components/stockItemList";
import { getProductsLowStock } from "@/services/productService";
import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const isFocused = useIsFocused();
  const [products, setProducts] = useState<{ [key: string]: any[] }>({});
  const router = useRouter();

  useEffect(() => {
    const data = getProductsLowStock();
    const groupedData = data.reduce((acc: { [key: string]: any[] }, product: any) => {
      if (!acc[product.category_name]) {
        acc[product.category_name] = [];
      }
      acc[product.category_name].push(product);
      return acc;
    }, {});

    setProducts(groupedData);
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
     {products && Object.keys(products).map((category) => (
        <View key={category} style={{ width: "100%" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 20, paddingTop: 10 }}>
            {category}
          </Text>
          {products[category].map((product: any) => (
            <StockItemList
              key={product.id}
              name={product.product_name}
              quantity={product.quantity}
              minQuantity={product.min_quantity}
              onEdit={() => router.navigate(`/product/editProduct/${product.id}`)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
