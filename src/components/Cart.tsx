import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import type { Product } from "../types/Product";

export const Cart = () => {
  const { productsCart } = useContext(ShopContext);

  return productsCart.map((product: Product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  ));
};
