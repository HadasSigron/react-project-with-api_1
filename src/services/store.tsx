import { addToLocalStorage, getFromLocalStorage } from "../utils/utils";

export interface Product {
  id: number;
  title: string;
}

const STORAGE_KEY = "products_cache";

export function getProducts(): Promise<Product[]> {
  const cached = getFromLocalStorage(STORAGE_KEY);
  if (cached) {
    console.log("Loaded products from localStorage");
    return Promise.resolve(cached);
  }

  return fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    })
    .then((data: Product[]) => {
      addToLocalStorage(STORAGE_KEY, data);
      console.log("Fetched from API and saved to localStorage");
      return data;
    });
}
