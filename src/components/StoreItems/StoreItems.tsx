import { get } from "http";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/store";

interface Product {
  title: string;
}

function storeItems(){
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const data = getProducts();
        setProducts(data);
    },[]);

    console.log(products);
    return <div>
        {products.map((product, index) => (
            <div key={index}>{product.title}</div>
        ))}
    </div>;
    
}
export default storeItems;



