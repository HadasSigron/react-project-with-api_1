export interface Product {
  title: string;
}

export function getProducts(): Product[] {
  return [{ title: "Banana" }];
}
