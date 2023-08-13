import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { Product } from "@/types/Catalog";

const ProductsList = () => {
  const [productsList, setProductsList] = useState<Array<Product>>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res => setProductsList(res));
  }, []);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
      {productsList.length &&
        productsList.map((item, index) => {
          return <ProductItem key={index} productItem={item}></ProductItem>;
        })}
    </div>
  );
};

export default ProductsList;
