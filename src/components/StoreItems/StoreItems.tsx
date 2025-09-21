import { useEffect, useState } from "react";
import { getProducts, Product } from "../../services/store";

export default function StoreItems() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        console.log("Products from API:", data); 
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return null;
}
