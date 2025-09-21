export interface Product {
  id: number;
  title: string;
}

export function getProducts(): Promise<Product[]> {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    });
}
