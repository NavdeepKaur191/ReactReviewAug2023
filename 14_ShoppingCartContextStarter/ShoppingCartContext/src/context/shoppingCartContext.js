import { createContext, useState } from "react";

export const CartContext = createContext({
  user: 1,
  items: [],
  total: 0,
  selectItems: function () {},
});

export function CartContextProvider({ children }) {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  let cartValue = {
    items: itemsSelected,
    total: parseFloat(cartTotal).toFixed(2),
    selectItems: setItemsSelected,
    setTotal: setCartTotal,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}
