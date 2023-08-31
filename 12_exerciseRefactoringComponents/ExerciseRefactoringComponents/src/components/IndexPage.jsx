/**
 * DO NOT CHANGE THIS FILE
 */

import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Product Details",
    hrefOriginal: "/products/3456",
    hrefRefactored: "/refactoredproducts/3456",
    imageSrc:
      "https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents12.png",
    imageAlt: "The products details component",
  },
  {
    id: 2,
    name: "Signup Form",
    hrefOriginal: "/register",
    hrefRefactored: "/refactoredRegister",
    imageSrc:
      "https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents13.png",
    imageAlt: "A signup form component",
  },
  {
    id: 3,
    name: "Values",
    hrefOriginal: "/values",
    hrefRefactored: "/refactoredValues",
    imageSrc:
      "https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents14.png",
    imageAlt: "A Values Component",
  },
  {
    id: 4,
    name: "Promo",
    hrefOriginal: "/promo",
    hrefRefactored: "/refactoredPromo",
    imageSrc:
      "https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents15.png",
    imageAlt: "A Promo component",
  },
];

export default function IndexPage() {
  return (
    <div className="bg-white w-11/12 mx-auto text-center">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center pb-4">
          Refactoring Components Exercise
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 shadow-lg aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-6 flex flex-col space-y-2">
                <h2 className="mx-auto text-xl font-bold mb-4">
                  {product.name}
                </h2>
                <Link
                  className="bg-blue-700 text-white py-2 px-4 text-center rounded-md w-9/12 mx-auto hover:shadow-xl hover:bg-blue-500"
                  to={product.hrefOriginal}
                >
                  Original
                </Link>
                <Link
                  className="bg-indigo-700 text-white py-2 px-4 text-center rounded-md w-9/12 mx-auto  hover:shadow-xl hover:bg-indigo-500"
                  to={product.hrefRefactored}
                >
                  Refactored
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
