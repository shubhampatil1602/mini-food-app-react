import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Offerings from './components/Offerings';
import Signin from './components/Signin';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { FoodDataContext } from './utils/context';
import { foods, topPicks } from './Data/Food';
import Cart from './components/Cart';

const App = () => {
  const [menu, setMenu] = useState({ foods, topPicks });
  const [cartMenu, setCartMenu] = useState([]);

  const addToCart = (id) => {
    const existingItemIndex = cartMenu.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedCart = cartMenu.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      setCartMenu(updatedCart);
    } else {
      const newItem =
        menu.topPicks.find((menu) => menu.id === id) ||
        menu.foods.find((food) => food.id === id);
      setCartMenu([...cartMenu, { ...newItem, quantity: 1 }]);
    }
  };
  const removeOneQantity = (id) => {
    let updatedCart = cartMenu.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });

    setCartMenu(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartMenu.filter((item) => item.id !== id);
    setCartMenu(updatedCart);
  };
  // useEffect(() => {
  //   console.log(cartMenu);
  // }, [cartMenu]);
  return (
    <>
      <FoodDataContext.Provider
        value={{ menu, cartMenu, removeOneQantity, removeItem, addToCart }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/offerings' element={<Offerings />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FoodDataContext.Provider>
    </>
  );
};

export default App;
