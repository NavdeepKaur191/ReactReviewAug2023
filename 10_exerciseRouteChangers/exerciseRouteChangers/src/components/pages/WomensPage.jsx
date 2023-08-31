import { useState, useEffect } from "react";

export default function WomensPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:3030/api");
    const data = await response.json();

    setResults(data);
  }

  function calcSalePrice(price) {
    var floatPrice = parseFloat(price);
    let salePrice = floatPrice * 0.75;
    return salePrice.toFixed(2);
  }

  const products = results.filter((results) => results.category === "womens");

  return (
    <div className="bg-white w-4/5 mx-auto ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 lg:mt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Women&lsquo;s
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>

                <div>
                  <p
                    className={
                      product.sale
                        ? "text-sm font-medium  line-through text-gray-900"
                        : "text-sm font-medium text-gray-900"
                    }
                  >
                    ${product.price}
                  </p>
                  {/* {console.log(parseInt(product.price))} */}
                  <p
                    className={
                      product.sale
                        ? "text-sm font-semibold text-red-700"
                        : "hidden "
                    }
                  >
                    ${calcSalePrice(product.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
