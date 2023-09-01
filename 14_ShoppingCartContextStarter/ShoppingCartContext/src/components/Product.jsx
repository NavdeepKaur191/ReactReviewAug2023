import { CartContext } from "../context/shoppingCartContext";
import { useContext } from "react";
export default function Product({
  id,
  imageSrc,
  imageAlt,
  href,
  name,
  brand,
  sale,
  price,
}) {
  const cart = useContext(CartContext);
  function calcSalePrice(price) {
    var floatPrice = parseFloat(price);
    let salePrice = floatPrice * 0.75;
    return salePrice.toFixed(2);
  }

  function addProductToCart() {
    var currentPrice = parseFloat(price).toFixed(2);
    if (sale) {
      currentPrice = calcSalePrice(price);
    }
    cart.selectItems([
      {
        id: id,
        imageSrc: imageSrc,
        imageAlt: imageAlt,
        name: name,
        price: currentPrice,
        brand: brand,
      },
      ...cart.items,
    ]);
    cart.setTotal(
      (prevTotal) => parseFloat(prevTotal) + parseFloat(currentPrice)
    );
  }
  return (
    <>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{brand}</p>
          </div>

          <div>
            <p
              className={
                sale
                  ? "text-sm font-medium  line-through text-gray-900"
                  : "text-sm font-medium text-gray-900"
              }
            >
              ${price}
            </p>

            <p
              className={
                sale ? "text-sm font-semibold text-red-700" : "hidden "
              }
            >
              ${calcSalePrice(price)}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="p-2 mt-1 rounded-md bg-black text-white shadow-lg  transform hover:scale-105"
          onClick={() => addProductToCart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
