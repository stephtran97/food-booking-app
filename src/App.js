import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

import { useEffect, useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    cartIsShown && (document.body.style.overflow = "hidden");
    return () => (document.body.style.overflow = "unset");
  }, [cartIsShown]);

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
      <Header
        onShowCart={showCartHandler}
        onHideCart={hideCartHandler}
      ></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
