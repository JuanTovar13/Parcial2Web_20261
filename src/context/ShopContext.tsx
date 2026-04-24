import { createContext, useState } from "react";
import type { Product } from "../types/Product";

type ShopContextType = {
  productsCart: Product[];
  addToCart: (product: Product) => void;
};

export const ShopContext = createContext<ShopContextType | null>(null);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsCart, setProducts] = useState<Product[]>([]);

  const addToCart = (newProduct: Product) => {
    setProducts([...productsCart, newProduct]);
  };

  return (
    <ShopContext.Provider value={{ productsCart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
