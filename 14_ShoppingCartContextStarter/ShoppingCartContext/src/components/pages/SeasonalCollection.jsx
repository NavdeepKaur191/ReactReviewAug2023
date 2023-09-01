import { useState, useEffect } from "react";
import Product from "../Product";

export default function SeasonalCollection() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:3030/api");
    const data = await response.json();

    setResults(data);
  }

  const products = results.filter((results) => results.collection == "fall");

  return (
    <div className="bg-white w-4/5 mx-auto ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 lg:mt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Fall Collection
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              href={product.href}
              name={product.name}
              brand={product.brand}
              sale={product.sale}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
