import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider'
function App() {
    const [cartIsShown,setCartIsShown] = useState(false);


    const setCartOnHandler = () =>{
      setCartIsShown(true);
    }

    const setCartOffHandler = () =>{
      setCartIsShown(false);
    }

  return (
    <CartProvider>
      <Header onShowCart={setCartOnHandler}/>
      {cartIsShown && <Cart onCloseCart={setCartOffHandler}/>}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
