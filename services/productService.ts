import { db } from "@/database/database";

// Definição de tipos para produtos
type Product = {
  id?: number;
  name: string;
  barcode: string;
  category_id: number;
  fractional: boolean;
  quantity: number;
  min_quantity: number;
};

// Função para adicionar um produto
const addProduct = (product: Product) => {
  const { name, barcode, category_id, fractional, quantity, min_quantity } =
    product;

  db.runSync(
    `INSERT INTO products (name, barcode, category_id, fractional, quantity, min_quantity) VALUES (?, ?, ?, ?, ?, ?);`,
    [name, barcode, category_id, fractional ? 1 : 0, quantity, min_quantity]
  );
};

//Função para atualizar um produto
const updateProduct = (product: Product) => {
  const { id, name, barcode, category_id, fractional, quantity, min_quantity } =
    product;
  if (!id) return;

  db.runSync(
    `UPDATE products SET name = ?, barcode = ?, category_id = ?, fractional = ?, quantity = ?, min_quantity = ? WHERE id = ?;`,
    [name, barcode, category_id, fractional ? 1 : 0, quantity, min_quantity, id]
  );
};

//Função para deletar um produto
const deleteProduct = (productId: number) => {
  db.runSync(`DELETE FROM products WHERE id = ?`, [productId]);
};

// Função para buscar todos os produtos
const getProducts = () => {
  const products = db.getAllSync("SELECT * FROM products");
  return products;
};

// Função para buscar produto por id
const getProductById = (productId: number) => {
  const product = db.getFirstSync("SELECT * FROM products where id = (?)", [
    productId,
  ]);
  return product;
};

// Função para buscar produtos com estoque inferior ao mínimo
const getProductsLowStock = () => {
  const products = db.getAllSync(`
    SELECT p.id,p.name as product_name, c.name as category_name, min_quantity, quantity 
    FROM products p 
    JOIN categories c on p.category_id = c.id 
    WHERE quantity < min_quantity 
    ORDER BY c.name, p.name
  `);
  return products;
};

// Exporta as funções de produto
export {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getProductsLowStock,
  Product,
};
