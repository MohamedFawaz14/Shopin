import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage';
import WishList from '../components/WishList';
import Cart from '../components/Cart';
import Orders from '../components/Orders';

const RoutesController = ({ 
  addToCart, 
  cart, 
  setCart, 
  addToWishList, 
  setMenuPage, 
  menuPage,
  wishList,
  setWishList,
  Order,
  setOrder
}) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage 
            addToCart={addToCart}
            cart={cart}
            setCart={setCart}
            addToWishList={addToWishList}
            setMenuPage={setMenuPage}
            menuPage={menuPage}
          />
        } 
      />
      <Route 
        path="/WishList" 
        element={
          <WishList 
            wishList={wishList}
            setWishList={setWishList}
            addToCart={addToCart}
          />
        } 
      />
      <Route 
        path="/Cart" 
        element={
          <Cart 
            cart={cart}
            setCart={setCart}
            setOrder={setOrder}
          />
        } 
      />
      <Route 
        path="/Orders" 
        element={
          <Orders 
            Order={Order}
            setOrder={setOrder}
          />
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesController;