import { db } from "@/database/database";

// Definição de tipo para categorias
type Category = {
  id?: number;
  name: string;
};

// Função para adicionar uma categoria
const addCategory = (category: Category) => {
  const { name } = category;

  db.runSync(`INSERT INTO categories (name) VALUES (?);`, [name]);
};

// Função para deletar uma categoria
const deleteCategory = (categoryId: number) => {
  // Verifica se a categoria possui produtos
  const products = db.getAllSync(`SELECT * FROM products WHERE category_id = (?);`, [categoryId]);
  if (products.length > 0) throw new Error("Categoria possui produtos"); 
  db.runSync(`DELETE FROM categories WHERE id = (?);`, [categoryId]);
};

// Função para atualizar uma categoria
const updateCategory = (category: Category) => {
  const { id, name } = category;
  if (!id) return

  db.runSync(`UPDATE categories SET name = (?) WHERE id = (?);`, [name, id]);
};

// Função para buscar todas as categorias
const getCategories = () => {
  const categories = db.getAllSync(`SELECT * FROM categories;`);
  return categories;
};

// Função para buscar categroia por id
const getCategoryById = (categoryId: number) => {
  const category = db.getFirstSync("SELECT * FROM categories where id = (?)", [categoryId]);
  return category;
};

// Exporta as funções de categoria
export { addCategory, updateCategory, deleteCategory, getCategories, getCategoryById, Category };
